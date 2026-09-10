# Joseph OS — Phase 1 Desktop Foundation

## Goal
Build the first full-screen Joseph OS desktop shell: cinematic, responsive, keyboard-friendly, and architected for future applications without implementing their content.

## Visual direction
- Create an original dark blue/teal desktop identity with restrained warm horizon light, layered glass, fine borders, soft depth, and elegant typography.
- Generate a cinematic landscape wallpaper inspired by the reference’s atmosphere and composition, without copying its exact scene or Windows visual assets.
- Integrate a centered JO monogram, “JOSEPH OS,” “BUILD • CREATE • IMPACT,” and a subtle “Deus Vult” signature into the environment.
- Preserve generous open wallpaper space while placing desktop launchers on the left and compact system widgets around the upper/right edges.

## Build
- Establish semantic color, glass, typography, shadow, spacing, and animation tokens in the global design system.
- Create reusable desktop primitives: `GlassPanel`, `DesktopIcon`, `ApplicationLauncher`, `Clock`, `SystemTray`, `Search`, `StartMenu`, `Taskbar`, and `Desktop`.
- Add the nine requested desktop launchers with single-click selection, double-click placeholder launch feedback, tooltips, focus states, and keyboard activation.
- Build the Start Menu shell with search, pinned apps, clearly labeled preview recommendations, profile, settings, and power controls.
- Build the search overlay structure for apps, projects, commands, and content; include useful Phase 1 launcher filtering without pretending deeper search exists.
- Build the compact taskbar with the requested shortcuts, active-area foundation, tray indicators, and live local time/date.
- Add the six requested widgets. Mark demo system and project values as previews rather than real telemetry or progress.
- Make Phase 1 actions honest: Start/search work, dark-mode action reflects the fixed desktop theme, and future app actions return restrained “coming in a future phase” feedback.

## Responsive behavior
- Preserve the composed desktop on laptops and wide tablets.
- Reflow or hide secondary widgets at narrower widths while keeping icons, branding, Start, search, clock, and taskbar usable.
- Avoid presenting this as the later mobile OS experience.

## Validation
- Verify the home screen metadata, clean compilation, live interactions, outside-click dismissal, keyboard navigation, and local clock updates.
- Inspect desktop and tablet-sized renders for clipping, overlap, legibility, wallpaper framing, and visual hierarchy.

## Out of scope
No application windows or About, Projects, Skills, Experience, Resume, Blog, Terminal, Contact, or Settings content will be implemented in Phase 1.
