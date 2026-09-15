# Joseph OS Phase 2 Window Manager

## User-visible result

Keep the existing cinematic desktop unchanged while applications open as real, reusable Joseph OS windows. Users can launch, focus, move, resize, minimize, restore, maximize, and close multiple placeholder applications, with the taskbar reflecting open and active windows.

## Implementation

1. Create a central application registry with the existing nine application IDs, metadata, icons, dimensions, resizing rules, and lightweight future-phase placeholder content.
2. Add a reusable window manager hook/state layer that enforces one instance per application, cascade positioning, focus/z-order updates, close behavior, and geometry preservation.
3. Build reusable window, title-bar, controls, and resize-handle components using the current glass styling and semantic design tokens.
4. Mount the manager above the desktop shell and route all desktop, Start Menu, Search, quick-action, and taskbar launches through the same application ID based launcher.
5. Add pointer-based dragging/resizing constrained to the desktop workspace, plus minimize/maximize/restore lifecycle behavior and keyboard-accessible controls.
6. Validate the requested multi-window lifecycle with Playwright at desktop, laptop, tablet, and smaller supported viewports; fix any build, runtime, overflow, or accessibility regressions.

## Boundaries

No final portfolio application content, backend, new navigation, wallpaper, branding, or desktop/taskbar redesign. Placeholder windows only.
