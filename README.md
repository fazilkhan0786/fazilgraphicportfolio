# 📓 Handwritten Aesthetic Portfolio & Project Showcase
### Designed & Developed by **Mohammad Fazil Firojkhan Malek**

A high-performance, visually premium, and highly interactive handwritten-style portfolio built with React, Vite, TailwindCSS, and GSAP. This application features custom 3D animations, cinematic layout transitions, and high-security safeguards protecting its intellectual property.

---

## 🌟 Key Features

### 1. Cinematic 3D opening Notebook
* An interactive 3D notebook cover that swings open -180 degrees in a simulated physical perspective.
* Scroll-driven camera paths zooming and panning directly into specific pages and handwritten paragraphs.
* Fluid typography built using container query units (`cqw`) that scales font sizes dynamically.
* Dynamically adjusts zoom scale (`2.0` on mobile) and positioning translations on narrow viewports to deliver a clean single-page reading experience.

### 2. Shipped Work Express (Horizontal Train Showcase)
* A custom-drawn horizontal scrolling railway consist containing a locomotive and passenger carriages.
* Project details are delivered as ticket cards suspended from platform signs that pop into view as the train halts.
* Train wheels spin dynamically, synchronizing speed and direction with the scroll velocity.
* Tailored mobile viewport CSS scaling (`scale(0.62)`) ensures the train consist fits perfectly on smaller devices.

### 3. High-Fidelity Aesthetic Details
* Custom hand-drawn SVGs (stars, sparkles, wavy highlights) that float and bounce.
* Ambient ruled paper background texture with a classic red margin line.
* Follow-along sketchy magnetic mouse cursors with custom hover animations.

---

## 🔒 Advanced Client-Side Security

To protect this project from unauthorized inspection, cloning, or tampering in the browser:
* **Context Menu Blocker**: Disables right-clicks globally, preventing easy access to browser inspector options.
* **Shortcut Interceptor**: Blocks developer tools shortcut keys (`F12`, `Ctrl+Shift+I` / `Cmd+Opt+I`, `Ctrl+Shift+J` / `Cmd+Opt+J`, `Ctrl+Shift+C` / `Cmd+Opt+C`, `Ctrl+U` / `Cmd+Opt+U`, etc.).
* **Anti-Debugging Breakpoint Loop**: Implements a recurrent, background `debugger;` execution engine that pauses browser processing immediately if DevTools is forced open, freezing the inspector utility and safeguarding the code.
* **Single-File Bundling**: Vite compiles, minifies, and inlines all JS and CSS resources directly into `index.html` inside `dist/`, stripping source comments and producing an obfuscated, single-file production asset.

---

## ⚙️ Built With

* **Core**: React 19 (TypeScript)
* **Styling**: TailwindCSS 4 (Vite CSS compiler)
* **Animation**: GSAP 3.15 (ScrollTrigger plugin)
* **Bundling**: Vite 7 + `vite-plugin-singlefile` (inlines all resources for standalone execution)

---

## 🚀 Getting Started

### Installation
Install project dependencies using npm:
```bash
npm install
```

### Run Locally (Development)
Start the Vite local development server:
```bash
npm run dev
```

### Production Build
Compile, minify, and bundle everything into a single secure file:
```bash
npm run build
```
The output will be created inside the `dist/index.html` directory.

---

## 💼 Copyright & Watermark
© 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.  
Watermark-ID: `MF-FIROJKHAN-MALEK-2026`  
Licensed for personal showcase. Codebase protected against copying and plagiarism.
