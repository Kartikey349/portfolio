export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  highlights: string[];
  featured?: boolean;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "drawgon",
    name: "Drawgon",
    tagline:
      "AI-powered whiteboard and diagramming platform for creating, editing, generating, saving, sharing, and exporting diagrams.",
    description:
      "A full-stack AI-powered whiteboard and diagramming application built around Excalidraw as the core canvas and diagramming engine. Users draw with the full set of whiteboard tools, generate diagrams from natural-language prompts, and keep every project persisted, shareable by link, and exportable as an image.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Clerk",
      "Drizzle",
      "PostgreSQL",
      "Excalidraw",
      "Groq / LLM",
    ],
    githubUrl: "https://github.com/Kartikey349/agentic-whiteboard",
    liveUrl: "https://drawgonx.vercel.app/",
    featured: true,
    badge: "Featured / Latest",
    features: [
      "Whiteboard editing with shapes, text, arrows, freehand drawing, and image support",
      "AI diagram generation from natural-language descriptions, rendered directly on the canvas",
      "Supports architecture diagrams as well as UI and mobile screen diagrams",
      "Manual save functionality for persisting the current canvas",
      "Project creation, renaming, archiving, restoring, and permanent deletion",
      "Public project sharing through unique share tokens, with enable/disable controls and a dedicated shared-projects section",
      "Shared projects open in a public read-only whiteboard",
      "Copy-to-clipboard and WhatsApp sharing for generated share links",
      "Image export using Excalidraw's export APIs",
      "Dark and light theme support synchronized with the Excalidraw canvas",
      "Responsive workspace controls with mobile-specific actions",
      "Authentication and protected routes using Clerk",
    ],
    highlights: [
      "Next.js, TypeScript, and Tailwind CSS front end with Clerk handling auth and protected routes",
      "Excalidraw integrated as the core canvas and diagramming engine",
      "Persistent whiteboard storage on PostgreSQL (Neon) through Drizzle ORM",
      "Excalidraw elements and files persisted and restored when reopening a project",
      "Groq-backed LLM converts natural-language input into structured diagram data, which is then rendered on the canvas",
      "Viewport positioning brings saved diagrams into view automatically after loading",
      "Excalidraw state serialization and restoration handled, including sanitizing runtime-only state such as collaborators",
    ],
  },
  {
    id: "devtinder",
    name: "DevTinder",
    tagline:
      "Developer networking platform built with the MERN stack for discovering and connecting with developers.",
    description:
      "A responsive developer networking platform built with the MERN stack, centred on developer profiles, skill-based matchmaking, and real-time messaging between developers.",
    technologies: [
      "React",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "DaisyUI",
      "JWT",
      "Redux",
      "Socket.io",
    ],
    liveUrl: "https://dev-tinder-frontend-zeta.vercel.app/",
    features: [
      "JWT authentication with password hashing",
      "Profile creation and editing with bio, skills, and profile picture support",
      "Matchmaking system that suggests developers based on skills and interests",
      "Real-time messaging integrated through Socket.io",
      "Online and offline user tracking",
    ],
    highlights: [
      "MERN architecture: React front end with an Express and MongoDB back end",
      "Tailwind CSS and DaisyUI powering the responsive interface",
      "Redux handling client-side state",
      "Socket.io driving real-time messaging and presence",
      "JWT and password hashing securing authentication",
    ],
  },
  {
    id: "second-brain",
    name: "Second Brain",
    tagline:
      "A personal knowledge-management application designed to store, organize, retrieve, and securely share information.",
    description:
      "A TypeScript-based MERN application for storing and retrieving personal knowledge, organized into categories and shareable securely in a read-only mode.",
    technologies: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "Redux",
      "Express",
      "JWT",
      "MongoDB",
    ],
    liveUrl: "https://second-brain-eta-five.vercel.app/",
    features: [
      "Storing and retrieving personal knowledge",
      "Category-wise organization of saved knowledge",
      "Secure sharing functionality",
      "Shared knowledge accessible by others in read-only mode",
      "Authentication and protected user functionality",
    ],
    highlights: [
      "TypeScript used across the React front end and Express back end",
      "MongoDB persistence paired with JWT-secured authentication",
      "Redux handling client-side state",
      "Dedicated read-only public view for shared knowledge",
      "Tailwind CSS for the responsive interface",
    ],
  },
];
