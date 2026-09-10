export interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "devtinder",
    number: "01",
    name: "DevTinder",
    description:
      "A developer networking platform built around profiles, matchmaking and real-time communication.",
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
    githubUrl: "#",
    features: [
      "Developer profiles",
      "Profile editing",
      "Skills and bio",
      "Profile picture uploads",
      "Developer matchmaking",
      "JWT authentication",
      "Real-time messaging",
      "Online/offline tracking",
    ],
  },
  {
    id: "second-brain",
    number: "02",
    name: "Second Brain",
    description:
      "A personal knowledge system for storing, organizing and sharing memories.",
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
    githubUrl: "#",
    features: [
      "Knowledge storage",
      "Category-wise organization",
      "Secure sharing",
      "Read-only shared memories",
      "Authentication",
    ],
  },
  {
    id: "netflix-gpt",
    number: "03",
    name: "NetflixGPT",
    description:
      "A movie discovery experience enhanced with AI-powered recommendations.",
    technologies: [
      "React",
      "TailwindCSS",
      "Firebase Auth",
      "Redux",
      "OpenAI GPT API",
      "TMDB API",
    ],
    liveUrl: "https://netflix-gpt-kappa-beryl.vercel.app/",
    githubUrl: "#",
    features: [
      "Movie discovery",
      "Firebase authentication",
      "TMDB movie data",
      "AI-powered recommendations",
      "Redux state management",
    ],
  },
];