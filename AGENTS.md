<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Joseph OS app content components live in `src/components/joseph-os/about/` (one responsibility per file, composed by `AboutProfile` / `AboutApp`); window management stays untouched in the Window Manager. Phase milestones proceed only when the user instructs the next phase.
