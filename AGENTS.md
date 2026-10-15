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

## Application rules
- Keep software/hardware experience and small-project descriptions in `src/lib/experience.ts` so portfolio pages share one source.
- Keep main project details and optional report links in `src/lib/projects.ts`; absent report files render an unavailable state rather than a fabricated link.
- Keep project galleries, drawing captions and document attachments in the shared project data; use asset pointers so uploaded binaries stay outside the source tree.
- Distribute local source as an inspected, dependency-free archive with startup instructions; never include credentials, workspace metadata or generated output.
- /admin er beskyttet af en shared-password gate (src/lib/gate.functions.ts): SITE_PASSWORD + SESSION_SECRET som server-secrets, timing-safe sammenligning, krypteret session. Redigering af indhold sker via Lovable-chat, ikke i browseren.
