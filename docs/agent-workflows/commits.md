# Commits and simplification

Use this workflow only when the user explicitly asks for a commit.

Review the proposed diff for reuse, clarity, unnecessary complexity, Svelte 5
conventions, accessibility, and consistency with Stratum UI. Apply safe
improvements without unrelated refactors.

Inspect status, branch, recent messages, and the complete diff. Stop for
secrets, empty or ambiguous scope. Run the checks in `AGENTS.md` and update the
README when content structure or deployment behaviour changes.

Stage named files only. Do not add agent attribution, skip hooks, amend
published commits, or push unless separately asked.
