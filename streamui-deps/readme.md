# StreamUI Deps

A lightweight dependency bundle for **StreamUI** – enabling seamless use of **copy-paste React components** with animations, icons, and utility helpers out of the box.

---

## 🚀 Features

✅ Installs **all required peer dependencies** (GSAP, Framer Motion, React Icons) for StreamUI.  
✅ Includes **prebuilt avatar SVG React components** supporting Tailwind `text-*` color theming.  
✅ Simple, scalable, and ready for Next.js, Vite, CRA, Astro, and more.

---

## 📦 Installation

```bash
npm install streamui-deps
```

---

## 🛠️ Usage

### 1️⃣ Importing Avatars

All avatars are exported at the package root:

```jsx
import { AngryWithFang, SmileTeethGap } from "streamui-deps";

<AngryWithFang className="w-12 h-12 text-blue-500" />
```

---

### 2️⃣ Building Locally

If you are contributing:

```bash
npm run build
```

This will build the avatars and output them into `dist/`.

---

### 3️⃣ Avatar Management Utilities

- **Replace fill with `currentColor` for Tailwind theming:**

```bash
node replace-fill-currentColor.js
```

- **Generate avatar export index dynamically:**

```bash
node generateIndex.js avatars
```

---

## 🖤 About

**StreamUI Deps** is maintained to support the **StreamUI** copy-paste React component library, providing the best developer experience while keeping your UI scalable and modern.

---

For issues or contributions, open a pull request or submit an issue in the main StreamUI repository.

---

Enjoy building beautifully fast interfaces with **StreamUI**!