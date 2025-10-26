# Hiking Image Gallery

A responsive hiking-themed image gallery built with Next.js 15, TypeScript, and TailwindCSS.

## 🧭 Features
- Modal routing with Next.js App Router
- Fully responsive grid layout
- Smooth animations with Framer Motion
- Dark/Light mode toggle

## 💡 Architecture
- `/gallery` shows all images
- `/gallery/[id]` opens the modal route
- Modal closes with `router.back()` to maintain SPA behavior

## ⚙️ Setup
```bash
yarn install
yarn dev
