<div align="center">

# 🧠 Agentic Memory & Context Window Linter

### Debug multi-turn AI agent memory. Understand context usage. Catch conflicting state.

<p>
  <a href="https://himat.tech/free-tools/agentic-memory-context-linter"><img src="https://img.shields.io/badge/🚀_Live_Demo-Open_Tool-7C3AED?style=for-the-badge" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/Privacy-Local--First-16A34A?style=for-the-badge" alt="Local-first analysis" />
  <img src="https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite-2563EB?style=for-the-badge" alt="React TypeScript Vite" />
</p>

**A developer-focused workspace for inspecting agent instructions, conversation history, active memory, retrieval chunks, and estimated context-window pressure.**

[Live Demo](https://himat.tech/free-tools/agentic-memory-context-linter) · [Website](https://himat.co.in) · [Contact](mailto:info@himat.co.in)

</div>

---

## ✨ Features

| Capability | What it does |
|---|---|
| 🧪 **Scenario presets** | Start with customer support, code refactoring, or research-assistant data. |
| 📝 **Instruction & conversation editors** | Edit the system prompt and add, update, or delete turns. |
| 🧠 **Memory & RAG inspection** | Edit key/value memory entries, sources, and categories. Duplicate keys are preserved for diagnostics. |
| 📊 **Context capacity analysis** | Estimate tokens, compare with a selectable context budget, and flag possible overflow. |
| 🔎 **Memory diagnostics** | Detect duplicate keys, conflicting values, repeated content, and possible state changes. |
| ⏳ **Turn-context decay** | Review turn distance and recency scores with adjustable heuristic sensitivity. |
| 💻 **Implementation code exporter** | Generate starter snippets for LangChain, LlamaIndex, and CrewAI (TypeScript currently supported for LangChain only). |
| 📦 **Audit import/export** | Import validated JSON audit data or export the latest prompt, turns, memory, and analysis. |

> **Important:** token counts use a generic estimate, not an exact model-specific tokenizer. Turn decay is a heuristic and does not measure an LLM's internal attention. Generated framework snippets are starting points; verify package versions and APIs before production use.

## 🚀 Live demo

<div align="center">

### [Open Agentic Memory & Context Window Linter →](https://himat.tech/free-tools/agentic-memory-context-linter)

</div>

This repository is the separate local-development project. It does not require changes to the hosted demo or other websites.

## 🖥️ Run locally on Windows

### Prerequisites

- [Node.js LTS](https://nodejs.org/) (npm is included)
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor
- Git, if you are cloning the repository

### 1. Clone the repository

Open PowerShell:

```powershell
git clone https://github.com/himat-technologies/agentic-memory-context-linter.git
cd agentic-memory-context-linter
```

If you already have a local clone, open that folder in VS Code instead.

### 2. Install dependencies

```powershell
npm install
```

### 3. Start the development server

```powershell
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### 4. Run tests

```powershell
npm test
```

### 5. Create a production build

```powershell
npm run build
```

### Troubleshooting

- **`npm` is not recognised:** install Node.js LTS, restart PowerShell, and verify with `node --version` and `npm --version`.
- **Port is busy:** open the alternate URL Vite prints in the terminal.
- **Build errors:** run `npm install` again and inspect the first actionable error in the terminal.

## 🔐 Privacy and security

- Analysis functions run in the browser; no backend, database, paid API, or API key is required.
- The app does not intentionally send prompt or memory contents to an external analysis service.
- The UI uses no analytics, telemetry, or remote font assets. The analysis features do not need network access after dependencies have been installed.
- Exported audit files can contain sensitive prompt text, conversation turns, and memory values. Store and share them carefully.
- Imported JSON is validated as data and is never executed as code.

## 🧰 Project structure

```text
src/
  components/       # Available for future component extraction
  data/presets.ts   # Editable scenario data
  lib/              # Token estimates, diagnostics, context and decay analysis
  lib/codeGenerators/ # Framework snippet generation
  styles/global.css # Responsive interface styling
  types/            # Shared TypeScript models
  App.tsx
  main.tsx
tests/              # Analysis and audit-validation unit tests
```

## 🌐 Connect with Himat Technologies

<div align="center">

| 🌍 Website | ✉️ Email | 📞 Call / WhatsApp |
|---|---|---|
| [himat.co.in](https://himat.co.in) | [info@himat.co.in](mailto:info@himat.co.in) | [+91 94452 34023](https://wa.me/919445234023) |

[![Facebook](https://img.shields.io/badge/Facebook-Follow-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/people/Himat-technologies/61593829197445/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/himat-technologies-14b1051b4)
[![Instagram](https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/himat_technologies?stkn=djdmcGxweWtwYWI0)

**Build systems, not just websites.**

</div>

---

<div align="center">

Made with 🧠 by **[Himat Technologies](https://himat.co.in)**

[Website](https://himat.co.in) · [Live Demo](https://himat.tech/free-tools/agentic-memory-context-linter) · [Email Us](mailto:info@himat.co.in)

</div>
