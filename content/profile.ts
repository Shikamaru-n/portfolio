// Who Malachy is: facts, hero, bio, education and interests.
// All copy has been through the humanizer.

export type SocialLink = {
  label: string;
  href: string;
  kind: "github" | "linkedin" | "email";
};

export const profile = {
  name: "Malachy Ugwu",
  email: "malachyugwu2002@gmail.com",
  github: "https://github.com/Shikamaru-n",
  githubUser: "Shikamaru-n",
  linkedin: "https://www.linkedin.com/in/malachyugwu",
  location: "Abuja, Nigeria",
  availability: "Open to remote work",
  roles: ["Data Scientist", "Data Analyst", "ML/AI Engineer", "Business Analyst"],
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, kind: "github" },
  { label: "LinkedIn", href: profile.linkedin, kind: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, kind: "email" },
];

export const photo = {
  src: "/images/malachy-ugwu.webp",
  alt: "Malachy Ugwu smiling, in a blue striped shirt",
  width: 480,
  height: 480,
};

export const hero = {
  greeting: "Hi, I'm Malachy Ugwu",
  intro:
    "I turn raw data into answers people can act on, using SQL, Python, Excel and machine learning.",
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "View projects", href: "/projects" },
};

// Short version for the Home page
export const aboutPreview = {
  eyebrow: "About me",
  headline: "An engineer's approach to data",
  body: "My background in electrical engineering taught me to think in systems: understand the inputs, trace the signal, make the output reliable. I now work the same way with data. Recent projects include a SQL Server fraud warehouse built on 6.36 million transactions, an Excel lead-scoring model, and a chatbot that answers questions from uploaded PDFs.",
  link: { label: "Learn more about me", href: "/about" },
};

// Full version for the About page
export const bio = [
  "I'm a data analyst and data scientist with a BEng in Electrical Engineering from the University of Nigeria, Nsukka. Engineering trained me to understand the inputs, trace the signal and make the output reliable. I bring the same habits to data.",
  "I like projects that get past the notebook stage. The Lagos rent predictor and the PDF chatbot are live apps anyone can try. In my PaySim project I tested the fraud rule once, on days it had never seen, so I could trust the number it gave.",
  "I'm based in Abuja, Nigeria, and open to remote roles in data science, data analysis, ML/AI and business analysis. I also take freelance work in data analysis, data science, AI/ML and BI.",
];

export const education = {
  degree: "Bachelor of Engineering, Electrical Engineering",
  degreeClass: "Second Class Honours, Upper Division",
  degreeClassShort: "Second Class Honours (Upper Division)",
  school: "University of Nigeria, Nsukka",
  years: "2019–2024",
  // Course names copied exactly from Malachy's CV. Not humanized, on purpose.
  coursework: [
    "Control Systems Engineering",
    "Communication Principles",
    "Electrical Machines",
    "Control Logic Circuit Design",
    "Switchgear and High Voltage Engineering",
    "Digital Signal Processing",
    "Circuit Theory",
    "Applied Electronics Systems",
    "Electric Power Systems Principles",
    "Power Semiconductor Devices and Circuits",
    "Electric Power System Analysis, Planning and Protection",
    "Power System Distribution and Optimization",
    "Renewable and New Energy Systems",
  ],
};

export type Interest = {
  label: string;
  // Picks the icon shown next to the interest on the About page
  icon: "chess" | "running" | "sudoku";
  description: string;
};

export const interests: Interest[] = [
  {
    label: "Chess",
    icon: "chess",
    description: "I play online and over the board. My peak Lichess ratings are 2100 in rapid and 2000 in blitz.",
  },
  {
    label: "Running",
    icon: "running",
    description: "I go running regularly.",
  },
  {
    label: "Sudoku",
    icon: "sudoku",
    description: "I like solving a good sudoku puzzle.",
  },
];
