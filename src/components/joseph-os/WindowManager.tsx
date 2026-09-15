import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { ApplicationId, ApplicationDefinition } from "./application-registry";
import { applicationRegistry } from "./application-registry";

export type WindowGeometry = { x: number; y: number; width: number; height: number };

export type ManagedWindow = WindowGeometry & {
  windowId: string;
  appId: ApplicationId;
  title: string;
  icon: ApplicationDefinition["icon"];
  minWidth: number;
  minHeight: number;
  resizable: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
  zIndex: number;
  restoreGeometry?: WindowGeometry;
};

type WindowManagerContextValue = {
  windows: ManagedWindow[];
  activeWindowId: string | null;
  openApplication: (appId: ApplicationId) => void;
  focusWindow: (windowId: string) => void;
  closeWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  restoreWindow: (windowId: string) => void;
  toggleMaximizeWindow: (windowId: string) => void;
  updateWindowGeometry: (windowId: string, geometry: Partial<WindowGeometry>) => void;
  cycleFocus: () => void;
};

const WindowManagerContext = createContext<WindowManagerContextValue | null>(null);

function workspaceBounds() {
  const width = typeof window === "undefined" ? 1280 : window.innerWidth;
  const height = typeof window === "undefined" ? 800 : window.innerHeight;
  return { width: Math.max(320, width - 24), height: Math.max(260, height - 84) };
}

function clampGeometry(geometry: WindowGeometry, minWidth: number, minHeight: number) {
  const bounds = workspaceBounds();
  const width = Math.min(Math.max(geometry.width, Math.min(minWidth, bounds.width)), bounds.width);
  const height = Math.min(Math.max(geometry.height, Math.min(minHeight, bounds.height)), bounds.height);
  return {
    width,
    height,
    x: Math.min(Math.max(geometry.x, 12), Math.max(12, bounds.width - width + 12)),
    y: Math.min(Math.max(geometry.y, 12), Math.max(12, bounds.height - height + 12)),
  };
}

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<ManagedWindow[]>([]);
  const zIndexRef = useRef(10);
  const cascadeRef = useRef(0);

  const focusWindow = useCallback((windowId: string) => {
    zIndexRef.current += 1;
    const nextZ = zIndexRef.current;
    setWindows((current) => current.map((window) => ({
      ...window,
      isFocused: window.windowId === windowId,
      zIndex: window.windowId === windowId ? nextZ : window.zIndex,
      isMinimized: window.windowId === windowId ? false : window.isMinimized,
    })));
  }, []);

  const openApplication = useCallback((appId: ApplicationId) => {
    const app = applicationRegistry[appId];
    if (!app) return;
    setWindows((current) => {
      const existing = current.find((window) => window.appId === appId);
      if (existing) {
        zIndexRef.current += 1;
        return current.map((window) => ({
          ...window,
          isFocused: window.windowId === existing.windowId,
          isMinimized: window.windowId === existing.windowId ? false : window.isMinimized,
          zIndex: window.windowId === existing.windowId ? zIndexRef.current : window.zIndex,
        }));
      }

      const bounds = workspaceBounds();
      const index = cascadeRef.current;
      cascadeRef.current = (cascadeRef.current + 1) % 6;
      const width = Math.min(app.defaultWidth, bounds.width);
      const height = Math.min(app.defaultHeight, bounds.height);
      const geometry = clampGeometry({
        width,
        height,
        x: (bounds.width - width) / 2 + index * 28,
        y: 42 + index * 24,
      }, app.minWidth, app.minHeight);
      zIndexRef.current += 1;
      const newWindow: ManagedWindow = {
        ...geometry,
        windowId: `${appId}-${Date.now()}`,
        appId,
        title: app.name,
        icon: app.icon,
        minWidth: app.minWidth,
        minHeight: app.minHeight,
        resizable: app.resizable,
        isMinimized: false,
        isMaximized: false,
        isFocused: true,
        zIndex: zIndexRef.current,
      };
      return [...current.map((window) => ({ ...window, isFocused: false })), newWindow];
    });
  }, []);

  const closeWindow = useCallback((windowId: string) => {
    setWindows((current) => {
      const remaining = current.filter((window) => window.windowId !== windowId);
      const next = [...remaining].sort((a, b) => b.zIndex - a.zIndex).find((window) => !window.isMinimized);
      return remaining.map((window) => ({ ...window, isFocused: next?.windowId === window.windowId }));
    });
  }, []);

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows((current) => {
      const next = [...current]
        .filter((window) => window.windowId !== windowId && !window.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex)[0];
      return current.map((window) => ({
        ...window,
        isMinimized: window.windowId === windowId ? true : window.isMinimized,
        isFocused: next?.windowId === window.windowId,
      }));
    });
  }, []);

  const restoreWindow = useCallback((windowId: string) => {
    zIndexRef.current += 1;
    setWindows((current) => current.map((window) => ({
      ...window,
      isMinimized: window.windowId === windowId ? false : window.isMinimized,
      isFocused: window.windowId === windowId,
      zIndex: window.windowId === windowId ? zIndexRef.current : window.zIndex,
    })));
  }, []);

  const toggleMaximizeWindow = useCallback((windowId: string) => {
    zIndexRef.current += 1;
    const bounds = workspaceBounds();
    setWindows((current) => current.map((window) => {
      if (window.windowId !== windowId) return { ...window, isFocused: false };
      if (window.isMaximized) {
        const geometry = window.restoreGeometry ?? { x: 60, y: 42, width: window.width, height: window.height };
        return { ...window, ...clampGeometry(geometry, window.minWidth, window.minHeight), isMaximized: false, isFocused: true, zIndex: zIndexRef.current, restoreGeometry: undefined };
      }
      return { ...window, x: 12, y: 12, width: bounds.width, height: bounds.height, isMaximized: true, isFocused: true, zIndex: zIndexRef.current, restoreGeometry: { x: window.x, y: window.y, width: window.width, height: window.height } };
    }));
  }, []);

  const updateWindowGeometry = useCallback((windowId: string, geometry: Partial<WindowGeometry>) => {
    setWindows((current) => current.map((window) => {
      if (window.windowId !== windowId || window.isMaximized) return window;
      return { ...window, ...clampGeometry({ x: geometry.x ?? window.x, y: geometry.y ?? window.y, width: geometry.width ?? window.width, height: geometry.height ?? window.height }, window.minWidth, window.minHeight) };
    }));
  }, []);

  const cycleFocus = useCallback(() => {
    setWindows((current) => {
      const visible = [...current].filter((window) => !window.isMinimized).sort((a, b) => b.zIndex - a.zIndex);
      if (visible.length < 2) return current;
      const next = visible[1];
      zIndexRef.current += 1;
      return current.map((window) => ({ ...window, isFocused: window.windowId === next.windowId, zIndex: window.windowId === next.windowId ? zIndexRef.current : window.zIndex }));
    });
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.altKey && event.key === "Tab" && windows.length > 1) {
        event.preventDefault();
        cycleFocus();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [cycleFocus, windows.length]);

  const value = useMemo(() => ({
    windows,
    activeWindowId: windows.find((window) => window.isFocused)?.windowId ?? null,
    openApplication,
    focusWindow,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    toggleMaximizeWindow,
    updateWindowGeometry,
    cycleFocus,
  }), [closeWindow, cycleFocus, focusWindow, minimizeWindow, openApplication, restoreWindow, toggleMaximizeWindow, updateWindowGeometry, windows]);

  return <WindowManagerContext.Provider value={value}>{children}</WindowManagerContext.Provider>;
}

export function useWindowManager() {
  const context = useContext(WindowManagerContext);
  if (!context) throw new Error("useWindowManager must be used inside WindowManagerProvider");
  return context;
}