// Navigation, interface labels and page text. All text here has been through the humanizer.

// The live site address. Set NEXT_PUBLIC_SITE_URL in Vercel once the final URL is known.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://malachy-ugwu.vercel.app"
).replace(/\/$/, "");

// Search results and social previews
export const seo = {
  title: "Malachy Ugwu | Data Scientist & Data Analyst",
  description:
    "Data scientist and data analyst in Abuja, Nigeria. SQL, Python, Excel and machine learning projects. Open to remote roles and freelance work.",
  ogImageAlt: "Malachy Ugwu: Data Scientist, Data Analyst, ML/AI Engineer and Business Analyst",
  pages: {
    about:
      "Malachy Ugwu's background, tech stack and experience. Data analyst and data scientist with a BEng in Electrical Engineering from UNN.",
    projects:
      "Data projects by Malachy Ugwu: a SQL Server fraud warehouse, an Excel lead-scoring model, a RAG chatbot and machine learning apps.",
    contact:
      "Get in touch with Malachy Ugwu about remote data roles or freelance data work.",
  },
};

export const notFoundPage = {
  title: "Page not found",
  body: "There's nothing at this address. The link may be broken, or the page may have moved.",
  home: "Go to the home page",
  projects: "View projects",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const ui = {
  skipLink: "Skip to content",
  mainNavLabel: "Main",
  themeMenuLabel: "Change theme",
  themeOptions: { light: "Light", dark: "Dark", system: "System" },
  openMenu: "Open menu",
  menuTitle: "Menu",
  footerQuickLinks: "Quick links",
  footerConnect: "Connect",
  newTab: "(opens in a new tab)",
};

// Section headings and card labels used across pages
export const labels = {
  background: "Background",
  coursework: "Coursework",
  techStack: "Tech stack",
  featuredProjects: "Featured projects",
  viewAllProjects: "View all projects",
  experience: "Experience & training",
  education: "Education",
  interests: "Interests",
  featured: "Featured",
  open: "Open",
  live: "Live",
  updated: "Updated",
  featuredProjectsIntro:
    "Three recent projects: a SQL Server warehouse, an Excel lead-scoring model and a RAG chatbot.",
  moreTags: (n: number) => `${n} more tags`,
  openOnGitHub: (repo: string) => `Open ${repo} on GitHub`,
  tryLive: (repo: string) => `Try the live ${repo} app`,
  stars: (n: number) => `${n} ${n === 1 ? "star" : "stars"}`,
  forks: (n: number) => `${n} ${n === 1 ? "fork" : "forks"}`,
};

// Contact page
export const contactPage = {
  title: "Contact",
  intro:
    "Hiring for a data role, or need help with a data project? Send me a message and I'll get back to you.",
  fields: { name: "Name", email: "Email", message: "Message" },
  submit: "Send message",
  sending: "Sending…",
  success: "Thanks, your message was sent. I'll reply by email.",
  error: (email: string) =>
    `Your message didn't send. Please try again, or email me at ${email}.`,
  notConfigured: (email: string) =>
    `The contact form isn't available right now. Please email me at ${email}.`,
  validation: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    message: "Please write a message.",
  },
  honeypotLabel: "Leave this field empty",
  emailSubject: "New message from your portfolio site",
  asideTitle: "Other ways to reach me",
};

// Projects page
export const projectsPage = {
  title: "Projects",
  intro:
    "Five projects built with SQL, Excel, machine learning and RAG. Filter them by category or change the order.",
  filterLabel: "Filter by category",
  allFilter: "All",
  sortLabel: "Sort by",
  sortOptions: {
    updated: "Recently updated",
    name: "Name (A–Z)",
    stars: "Most stars",
  },
  resultCount: (n: number) => `Showing ${n} ${n === 1 ? "project" : "projects"}`,
  empty: "No projects in this category yet.",
  showSubProjects: (n: number) => `See the ${n} projects inside`,
  hideSubProjects: (n: number) => `Hide the ${n} projects`,
};
