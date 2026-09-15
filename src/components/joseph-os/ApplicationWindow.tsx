import { Maximize2, Minimize2, X } from "lucide-react";
import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import { Button } from "@/components/ui/button";
import type { ManagedWindow, WindowGeometry } from "./WindowManager";
import { applicationRegistry } from "./application-registry";
import { useWindowManager } from "./WindowManager";

type ResizeDirection = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export function ApplicationWindow({ window: managedWindow, workspaceRef }: { window: ManagedWindow; workspaceRef: React.RefObject<HTMLElement | null> }) {
  const { focusWindow, closeWindow, minimizeWindow, toggleMaximizeWindow, updateWindowGeometry } = useWindowManager();
  const interaction = useRef<{ type: "drag" | "resize"; direction?: ResizeDirection; startX: number; startY: number; geometry: WindowGeometry } | null>(null);
  const app = applicationRegistry[managedWindow.appId];
  const Icon = managedWindow.icon;
  const AppContent = app.component;

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const current = interaction.current;
      if (!current) return;
      const dx = event.clientX - current.startX;
      const dy = event.clientY - current.startY;
      if (current.type === "drag") {
        updateWindowGeometry(managedWindow.windowId, { x: current.geometry.x + dx, y: current.geometry.y + dy });
        return;
      }
      const direction = current.direction ?? "se";
      const next = { ...current.geometry };
      if (direction.includes("e")) next.width = current.geometry.width + dx;
      if (direction.includes("s")) next.height = current.geometry.height + dy;
      if (direction.includes("w")) { next.width = current.geometry.width - dx; next.x = current.geometry.x + dx; }
      if (direction.includes("n")) { next.height = current.geometry.height - dy; next.y = current.geometry.y + dy; }
      updateWindowGeometry(managedWindow.windowId, next);
    };
    const stopInteraction = () => { interaction.current = null; document.body.classList.remove("window-interacting"); };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", stopInteraction);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", stopInteraction);
      document.body.classList.remove("window-interacting");
    };
  }, [managedWindow.windowId, updateWindowGeometry]);

  const beginInteraction = (event: ReactPointerEvent, type: "drag" | "resize", direction?: ResizeDirection) => {
    if (managedWindow.isMaximized) return;
    event.preventDefault();
    event.stopPropagation();
    focusWindow(managedWindow.windowId);
    interaction.current = { type, direction, startX: event.clientX, startY: event.clientY, geometry: { x: managedWindow.x, y: managedWindow.y, width: managedWindow.width, height: managedWindow.height } };
    document.body.classList.add("window-interacting");
  };

  const handleWindowPointerDown = () => focusWindow(managedWindow.windowId);
  const resizeHandles: ResizeDirection[] = ["n", "s", "e", "w", "ne", "nw", "se", "sw"];

  return (
    <section
      className={`os-window ${managedWindow.isFocused ? "os-window-focused" : ""} ${managedWindow.isMaximized ? "os-window-maximized" : ""}`}
      style={{ left: managedWindow.x, top: managedWindow.y, width: managedWindow.width, height: managedWindow.height, zIndex: managedWindow.zIndex }}
      onPointerDown={handleWindowPointerDown}
      aria-label={`${managedWindow.title} application window`}
      role="dialog"
    >
      <header className="window-titlebar" onPointerDown={(event) => beginInteraction(event, "drag")}>
        <div className="window-title"><span className={`app-icon app-icon-${managedWindow.appId === "terminal" ? "green" : "cyan"}`}><Icon /></span><span>{managedWindow.title}</span></div>
        <div className="window-controls" onPointerDown={(event) => event.stopPropagation()}>
          <Button variant="iconGlass" size="icon" onClick={() => minimizeWindow(managedWindow.windowId)} aria-label={`Minimize ${managedWindow.title}`} title="Minimize"><Minimize2 /></Button>
          <Button variant="iconGlass" size="icon" onClick={() => toggleMaximizeWindow(managedWindow.windowId)} aria-label={managedWindow.isMaximized ? `Restore ${managedWindow.title}` : `Maximize ${managedWindow.title}`} title={managedWindow.isMaximized ? "Restore" : "Maximize"}><Maximize2 /></Button>
          <Button variant="iconGlass" size="icon" className="window-close" onClick={() => closeWindow(managedWindow.windowId)} aria-label={`Close ${managedWindow.title}`} title="Close"><X /></Button>
        </div>
      </header>
      <div className="window-content"><AppContent title={managedWindow.title} icon={managedWindow.icon} /></div>
      {managedWindow.resizable && !managedWindow.isMaximized && resizeHandles.map((direction) => <span key={direction} className={`resize-handle resize-${direction}`} onPointerDown={(event) => beginInteraction(event, "resize", direction)} aria-hidden="true" />)}
    </section>
  );
}

export function WindowLayer({ workspaceRef }: { workspaceRef: React.RefObject<HTMLElement | null> }) {
  const { windows } = useWindowManager();
  return <div className="window-layer" aria-label="Open applications">{windows.filter((window) => !window.isMinimized).map((window) => <ApplicationWindow key={window.windowId} window={window} workspaceRef={workspaceRef} />)}</div>;
}