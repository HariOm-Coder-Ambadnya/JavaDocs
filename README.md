# JavaDocs — Learn Java & Spring

A production-quality documentation platform for learning Java, OOP, Spring Framework, Spring Boot, and JPA/Hibernate.

## Features

- 📚 **Full documentation** for Java, OOP, Spring, Spring Boot & JPA
- 💻 **Syntax-highlighted code blocks** with copy button
- 🎬 **Embedded YouTube video lectures** (click-to-load)
- 🔍 **Full-text search** across all lessons
- 🗂️ **Sticky sidebar navigation** with active lesson highlighting
- 📱 **Fully responsive** — mobile sidebar with overlay
- ⚡ **Code-split routes** via React lazy loading
- 🎨 **Custom design** — Syne + DM Sans fonts, orange/purple palette

## Tech Stack

- **React 18** + **TypeScript** — component framework
- **Vite** — blazing-fast dev server & bundler
- **React Router v6** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icons

## Project Structure

```
src/
├── components/
│   ├── Navbar/         # Sticky navbar with search
│   ├── Hero/           # Landing page hero + stats
│   ├── Sidebar/        # Collapsible docs sidebar
│   ├── CodeBlock/      # Syntax highlighting + copy
│   ├── VideoPlayer/    # YouTube embed (click-to-load)
│   ├── CourseCard/     # Course listing card
│   └── Footer/         # Site footer
├── pages/
│   ├── Home.tsx        # Landing page
│   ├── Docs.tsx        # Documentation index
│   ├── Lesson.tsx      # Individual lesson page
│   ├── Course.tsx      # Course overview page
│   └── Search.tsx      # Search page
├── data/
│   ├── courses.ts      # Course metadata
│   └── lessons.ts      # All lesson content + sidebar structure
├── styles/
│   └── global.css      # Tailwind + custom CSS
└── App.tsx             # Route definitions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to view the app.

## Content Coverage

| Section          | Lessons                                              |
|-----------------|------------------------------------------------------|
| Java Basics     | Intro, Variables, Loops, Arrays, Methods, Collections|
| OOP Concepts    | Encapsulation, Inheritance, Polymorphism, Abstraction, Interfaces |
| Spring Framework| IoC, DI, Beans, Spring MVC                          |
| Spring Boot     | Setup, REST APIs, Exception Handling                 |
| JPA/Hibernate   | Entities, Repositories, Relationships, JPQL          |

## Customisation

To add a new lesson:

1. Add lesson data to `src/data/lessons.ts` in the `LESSONS` record
2. Add the lesson to the appropriate `SIDEBAR_SECTIONS` entry
3. Update `prev`/`next` links on adjacent lessons

To add a new course:

1. Add course metadata to `src/data/courses.ts`
2. Add a new section to `SIDEBAR_SECTIONS` in `lessons.ts`
3. Add lessons following the same pattern
