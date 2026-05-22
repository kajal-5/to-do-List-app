# AGENTS.md — AI Agent Guidance

Purpose
- Provide concise instructions for AI coding agents working in this repository.

Disabling AI agent edits
- To opt-out of automated edits, create an empty file named `.ai-disabled` at the repository root.
- If `.ai-disabled` exists, AI agents MUST NOT modify source files, tests, or create new files. Agents may still offer suggestions in chat but must not apply changes.

When called with the argument `disable`
- Treat the request as an instruction to avoid making code changes. Instead, create or update only this file (`AGENTS.md`) documenting the opt-out and how to re-enable agents.

Agent behavior notes
- Prefer `AGENTS.md` over `.github/copilot-instructions.md` when both are present.
- Link to existing docs (e.g., README.md) instead of copying content.

Where to look
- See [README.md](README.md) for project overview and build/test commands.
