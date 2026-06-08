# Project Dashboard 🚀

A modern, high-performance task management workspace built for developer teams to plan coding goals and track project progress in real-time.

---
![Task Manager Screenshot](https://github.com/TeferiMulatu/react-tailwind-typescript-task-manager/blob/7e8b786345f17ea8ffd5cf601e7abbd414f3e4cb/task-manager-with-preseeded-info.jpeg)
---
![Task Manager Screenshot dark](https://github.com/TeferiMulatu/react-tailwind-typescript-task-manager/blob/14de938397cd0e0b3b5d9eed714784cee4415bf2/task-manager-dark.jpeg)
---
## 📱 What the App Does

This is a clean and powerful task workspace built for developers. Here is how it works:

- **📋 Manages Your Tasks:** Easily add new tasks, check them off when finished, or delete them. You can also give each task a priority level (**High, Medium, or Low**) and a **Due Date** to track deadlines.
- **📊 Shows Real-Time Stats:** The dashboard at the top automatically counts your tasks. It instantly updates to show your **Total Tasks**, **Active Tasks**, and **Completed Tasks**.
- **🔍 Easy Filters:** You can sort your list quickly. For example, you can choose to see *only* High Priority tasks, or *only* tasks that are finished.
- **💾 Saves Your Work:** The app automatically saves your tasks inside your browser's memory (`localStorage`). If you close the tab or refresh the page, your tasks will still be there.
- **🌙 Smooth Dark Mode:** Click the theme button to switch between Light Mode and Dark Mode. The colors change smoothly without flashing or hurting your eyes.
- **🔔 Pop-up Alerts:** Every time you add, finish, or delete a task, a nice little notification box pops up at the bottom of the screen to tell you what happened.
---
## ✨ Features

- **Fluid Dark Mode:** Automatic system preference detection with a custom, ultra-smooth transition toggle (no sudden flashing).
- **Responsive Grid Workspace:** A fully fluid Bento-box layout that adapts beautifully from mobile screens to massive monitors.
- **Micro-Animations:** Powered by Framer Motion for organic, spring-physics layout transitions and toast feedback elements.
- **Global State Architecture:** Clean state management via React Context API to handle tasks, filtering, and notification queues across components.
- **Strict Typing:** Written completely in TypeScript for rock-solid reliability and explicit API handling.

---

## 🎯 Pre-Seeded Workspace Tasks

To give visitors and developers an immediate look at the system under load, the workspace automatically seeds the following data layers into `localStorage` on its first launch:

1. **🔴 High Priority Backlog:** *Refactor Online Auction Management System secure real-time bidding events.* (Tracks mission-critical architecture states).
2. **🟡 Medium Priority Pipeline:** *Verify type-safe state tracking pipelines in Dynamic Content Delivery Flow.* (Pre-marked as **Completed** to demonstrate filter states).
3. **🔵 Low Priority Backlog:** *Review Vite + Tailwind CSS v4 native custom theme variable configuration.* (Includes dynamic calendar due-date mapping).

*Note: If you clear these tasks during testing and want them back, simply clear your browser's Local Storage or run `localStorage.removeItem('taskflow-tasks')` in your developer console to reset the factory seed configuration.*

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19 + TypeScript
- **Build Engine:** Vite
- **Styling Pipeline:** Tailwind CSS v4 
- **Animation Framework:** Framer Motion
- **Icon Assets:** Lucide React

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
   cd YOUR_REPOSITORY_NAME
   Install project dependencies:

2. **INSTALL PROJECT dEPENDENCIES**
   ```bash
   npm install

3. **Launch the local development server:**
   ```bash
    npm run dev

4. **Build the production bundle:**
   ```bash
   npm run build
