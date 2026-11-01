// Project cards. Descriptions and bullets use only figures from each repo's README.
// `fallbackStats` is shown if the GitHub API can't be reached at build time.
// All copy has been through the humanizer.

export type ProjectCategory = "Data Science" | "Data Analytics" | "AI/ML" | "BI";

export type SubProject = {
  title: string;
  summary: string;
  url: string;
};

export type Project = {
  repo: string; // exact GitHub repo name, shown as the card title
  url: string;
  liveUrl?: string;
  category: ProjectCategory; // tag shown on the card
  filters: ProjectCategory[]; // every category this project appears under
  language: string; // shown instead of GitHub's guess (e.g. "Jupyter Notebook")
  featured: boolean;
  description: string;
  bullets: [string, string];
  tags: string[];
  fallbackStats: { stars: number; forks: number; updated: string };
  subProjects?: SubProject[];
};

const gh = "https://github.com/Shikamaru-n";

export const projects: Project[] = [
  {
    repo: "paysim-fraud-analysis",
    url: `${gh}/paysim-fraud-analysis`,
    category: "Data Analytics",
    filters: ["Data Analytics"],
    language: "T-SQL",
    featured: true,
    description:
      "A SQL Server warehouse built on 6.36 million synthetic mobile-money transactions, with Bronze, Silver and Gold layers and a star schema. A new SQL fraud rule caught 47.7% of fraud on unseen test days, against 0.25% for the existing rule, while flagging 0.45% of honest transfers and cash-outs.",
    bullets: [
      "Loaded the raw CSV with BULK INSERT and tested every layer with quality, rule and reconciliation checks",
      "Froze the rules before scoring them once on held-out days, so the score couldn't be tuned to the test data",
    ],
    tags: [
      "SQL Server",
      "T-SQL",
      "BULK INSERT",
      "ETL",
      "Medallion architecture",
      "Star schema",
      "Data testing",
      "Fraud detection",
    ],
    fallbackStats: { stars: 0, forks: 0, updated: "2026-10-27" },
  },
  {
    repo: "bike-buyers-targeting-analysis",
    url: `${gh}/bike-buyers-targeting-analysis`,
    category: "BI",
    filters: ["BI", "Data Analytics"],
    language: "Excel",
    featured: true,
    description:
      "Excel analysis of 1,000 bike-shop customers that finds who buys and who to contact first. The top 30% by lead score bought at 70.3%, 1.46 times the 48.1% average.",
    bullets: [
      "Tested 12 factors with chi-square and Cramér's V, and kept only the nine that were significant",
      "Built a slicer-driven dashboard and a profile checker that scores any mix of customer traits",
    ],
    tags: [
      "Excel",
      "PivotTables",
      "Dynamic arrays",
      "Chi-square tests",
      "Lead scoring",
      "Dashboard",
      "Data cleaning",
    ],
    fallbackStats: { stars: 0, forks: 0, updated: "2026-10-19" },
  },
  {
    repo: "Pdf-ai",
    url: `${gh}/Pdf-ai`,
    liveUrl: "https://pdf-ai-4tm9z2dekexuwpwckzkmnk.streamlit.app/",
    category: "AI/ML",
    filters: ["AI/ML"],
    language: "Python",
    featured: true,
    description:
      "Upload PDFs and ask questions; the chatbot answers only from those documents. Built with LangChain, a FAISS vector store and a Groq LLM, with a Streamlit front end.",
    bullets: [
      "Combined dense and BM25 retrieval, then reranked the results with a Cross-Encoder",
      "Split the pipeline into separate modules for loading, chunking, embedding, retrieval and the answer chain",
    ],
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "Groq",
      "FAISS",
      "BM25",
      "Cross-Encoder",
      "HuggingFace embeddings",
      "Streamlit",
    ],
    fallbackStats: { stars: 0, forks: 0, updated: "2026-08-09" },
  },
  {
    repo: "lagos-house-rent-predictor",
    url: `${gh}/lagos-house-rent-predictor`,
    liveUrl: "https://lagos-house-rent-predictor-byknxmaplsnsy4apvhrhyq.streamlit.app/",
    category: "Data Science",
    filters: ["Data Science", "AI/ML"],
    language: "Python",
    featured: false,
    description:
      "A web app that estimates the yearly rent of a Lagos property in Naira from bedrooms, property type (9 options) and area (16 options).",
    bullets: [
      "Trained a scikit-learn model on one-hot encoded property type and location",
      "Saved the model and its feature columns with joblib so the app's inputs match the training data",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Regression", "joblib", "Streamlit"],
    fallbackStats: { stars: 0, forks: 0, updated: "2026-01-21" },
  },
  {
    repo: "ds-projects",
    url: `${gh}/ds-projects`,
    category: "Data Science",
    filters: ["Data Science"],
    language: "Python",
    featured: false,
    description:
      "Five machine learning and analysis projects in Python, covering clustering, classification, regression and exploratory analysis on Kaggle datasets.",
    bullets: [
      "Predicted employee retention with logistic regression and feature selection",
      "Identified the single feature that best predicts crop type",
    ],
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "K-Means",
      "Logistic regression",
    ],
    fallbackStats: { stars: 0, forks: 0, updated: "2026-02-10" },
    subProjects: [
      {
        title: "Clustering Antarctic Penguin Species",
        summary:
          "Grouped penguins with K-Means using culmen length and depth, flipper length, body mass and sex.",
        url: `${gh}/ds-projects/tree/main/ClusteringAntarcticPenguinSpecies`,
      },
      {
        title: "HR Analytics",
        summary: "Predicted employee retention with logistic regression and feature selection.",
        url: `${gh}/ds-projects/tree/main/HRAnalytics`,
      },
      {
        title: "Investigating Netflix Movies",
        summary: "Cleaned and explored Netflix data to look at movie trends from the 1990s.",
        url: `${gh}/ds-projects/tree/main/InvestigatingNetflixMovies`,
      },
      {
        title: "Predicting Movie Rental Duration",
        summary:
          "Predicted how long movies are rented, using regression, feature engineering and cross-validation.",
        url: `${gh}/ds-projects/tree/main/PredictingMovieRentalDuration`,
      },
      {
        title: "Predictive Modeling for Agriculture",
        summary:
          "Predicted crop type with multi-class classification and found the single most useful feature.",
        url: `${gh}/ds-projects/tree/main/PredictiveModelingAgriculture`,
      },
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Data Science",
  "Data Analytics",
  "AI/ML",
  "BI",
];
