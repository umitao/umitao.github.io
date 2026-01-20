# AGENTS.md - The Brain

This file serves as the "Master Prompt" and "Project Definition" source of truth for all AI agents working on this repository. Read this file to understand the user's preferences, coding standards, and architectural decisions.

## USER CONTEXT & CODING RULES

### 1. DEVELOPER CONTEXT

- **Role:** Senior Frontend Developer (React/React Native ecosystem).
- **Background:** Engineering professional with a diverse history in STEM and Technical Sales.
- **Technical Strengths:** Strong focus on RxJS, real-time data architectures, and type safety.
- **Learning Focus:** Currently adopting Next.js App Router and Server-Side concepts.
- **Communication Preferences:**
  - **High Signal-to-Noise:** Prefers dense, information-rich responses over conversational fluff.
  - **Structure:** Requirements must be clearly laid out with steps and triggers.
  - **Format:** Use bullet points and headers for scannability.

### 2. COMMUNICATION PROTOCOLS (STRICT)

- **Conciseness:** Be direct. Do not use filler words. Do not apologize profusely. Get to the point.
- **Formatting:** Use structured plans, checklists, and bullet points. Avoid walls of text.
- **Ambiguity:** If my prompt is vague, STOP and ask for clarification before generating code.
- **Timelines:** When proposing a plan, break it down into time-boxed triggers (e.g., "Phase 1: 30 mins").

### 3. CODING STANDARDS (CRITICAL)

- **Efficiency:** Write the simplest, most performant code possible.
- **Purity:** Prioritize pure functions. Avoid side effects unless absolutely necessary.
- **Data:** No unnecessary data manipulation. Pass state cleanly.
- **Type Safety:** Strict TypeScript always.
- **Architecture:** Default to "Zero-Cost" architectures (Static Export, minimal server reliance) unless instructed otherwise.
- **Explanation:** If a solution is complex, explain the "WHY" simply (ELI5), focusing on _why_ it is necessary, not just _how_ it works.

### 4. NEXT.JS SPECIFIC

- Since I am coming from standard React/Vite, explicitly highlight where Next.js differs (e.g., "We don't use useEffect here because...").

## PROJECT DEFINITION: THE TILED ARCHIVE

- **Concept:** A curated personal knowledge garden.
- **Tech Stack:** Next.js (App Router), Tailwind CSS, GitHub Pages.
- **Deployment:** Hosted live at umitso.com.
