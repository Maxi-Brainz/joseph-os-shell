# Joseph OS Phase 3D — Philosophy & Values

## User-visible result

Replace only the Philosophy placeholder with a reflective, editorial experience presenting Joseph’s two stated principles: Build with Purpose and Faith & Conviction. Keep Overview, Journey, Identity, desktop, and window behavior intact.

## Implementation

1. Add structured static Philosophy content and focused components for the introduction, each principle, and the closing connection.
2. Render the new Philosophy section through the existing About application section structure without rebuilding AboutApp or adding controls/backend behavior.
3. Style the experience with restrained Joseph OS colors, editorial hierarchy, subtle symbolism, and container-aware layouts for resizable windows.
4. Update the Phase 3D roadmap and record the content architecture rule in AGENTS.md.
5. Verify the new section, navigation, internal scrolling, narrow/wide layouts, and preservation of Overview, Journey, and Window Manager interactions.

## Boundaries

Do not add principles beyond the two supplied, invent personal faith experiences, duplicate the global BUILD • CREATE • IMPACT block, populate Identity, or change Phase 1/2, Overview, Journey, or window management.

## Technical details

Keep all Philosophy copy in a small static data module; compose the view from one-responsibility components under `src/components/joseph-os/about/`. Use the existing About content scroller and CSS container queries.