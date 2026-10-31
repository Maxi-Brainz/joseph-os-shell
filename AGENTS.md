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

- Joseph OS app content components live in `src/components/joseph-os/about/` and `src/components/joseph-os/journey/` (one responsibility per file, composed by `AboutProfile` / `AboutApp`; journey content data lives in `journey-data.ts`); window management stays untouched in the Window Manager. Phase milestones proceed only when the user instructs the next phase. Journey content must stay strictly accurate to the Phase 3C spec: concurrent 2024–Present roles are never sequential, Century stays an undated internship, NITDA/NCAIR stays ongoing training, and CKD results are always framed as reported academic results.
