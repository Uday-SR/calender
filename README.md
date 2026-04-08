# Wall Calendar Application

## Overview

This project is an interactive wall calendar web application built using Next.js. It is designed to replicate the look and feel of a physical wall calendar while maintaining full interactivity and responsiveness.

The interface combines a hero image, calendar grid, and notes section to balance visual design with functionality.

---

## Key Decisions

* **Next.js (App Router):** Chosen for its structured architecture and performance benefits with server and client components.
* **Framer Motion:** Used to implement smooth animations such as page flip transitions and swipe interactions for a more realistic experience.
* **date-fns:** Used for reliable and lightweight date manipulation.
* **Tailwind CSS:** Enables rapid styling and consistent design across components.
* **Fixed Layout (6-row grid):** The calendar always renders six rows to prevent layout shifts between months.
* **Client/Server Separation:** Interactive elements like animations and gestures are handled in client components, while static structure remains server-rendered.
* **Local Storage for Notes:** Keeps implementation simple while ensuring persistence across sessions.

---

## Features

* Monthly calendar view
* Date range selection with hover preview
* Swipe navigation on mobile devices
* Page flip animation between months
* Fixed-size layout to avoid UI shifts
* Notes panel with local persistence

---

## Running Locally

### 1. Clone the repository

```
git clone <repo-url>
cd <project-folder>
```

### 2. Install dependencies

```
npm install
```

### 3. Start development server

```
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## Notes

* The UI is intentionally designed to mimic a physical wall calendar using layout, shadows, and subtle motion.
* Animations are kept minimal and purposeful to enhance user experience without affecting performance.
* The project is optimized for both desktop and mobile interactions.

---

## License

This project is intended for demonstration purposes.
