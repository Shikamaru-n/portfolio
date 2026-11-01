// Experience & Training timeline. Facts from the old index.html.
// Dates confirmed by Malachy.
// All copy has been through the humanizer.

export type TimelineEntry = {
  role: string;
  organization: string;
  dates?: string;
  type: "Work" | "Applied AI" | "Training" | "Engineering" | "Projects";
  bullets: string[];
  tags?: string[];
};

export const experience: TimelineEntry[] = [
  {
    role: "Graduate Intern",
    organization: "Nigerian Electricity Regulatory Commission (NERC)",
    dates: "Nov 2025–Oct 2026",
    type: "Work",
    bullets: [
      "Reviewed Meter Service Provider files and technical submissions against NERC metering regulations.",
      "Supported Excel analysis, calculations and summary reports used for decisions at unit level.",
    ],
    tags: ["Excel", "Regulatory review", "Reporting"],
  },
  {
    role: "AI Engineer (Bootcamp)",
    organization: "NSK.ai",
    dates: "Jul–Sep 2025",
    type: "Applied AI",
    bullets: [
      "Built and deployed a modular RAG chatbot with Groq, FAISS, dense and sparse (BM25) retrieval, Cross-Encoder reranking and a Streamlit interface.",
    ],
    tags: ["RAG", "Groq", "FAISS", "BM25", "Streamlit"],
  },
  {
    role: "Data Scientist Career Track",
    organization: "DataCamp",
    dates: "Mar 2025",
    type: "Training",
    bullets: [
      "Completed a 90-hour, 23-course track in Python covering data manipulation, visualization, statistical analysis and machine learning.",
    ],
    tags: ["Python", "Statistics", "Machine learning"],
  },
  {
    role: "Data Analyst",
    organization: "Independent projects · Remote",
    dates: "Jan–Sep 2025",
    type: "Projects",
    bullets: [
      "Built an Excel lead-scoring model that ranked 1,000 customers by likelihood to buy. The top 30% bought at 70.3%, 1.46 times the average.",
      "Built a Streamlit app that estimates annual Lagos rent in naira from bedrooms, property type (9 options) and location (16 areas).",
    ],
    tags: ["Excel", "Statistics", "Python", "Scikit-learn", "Streamlit"],
  },
  {
    role: "SIWES Industrial Trainee",
    organization: "Transmission Company of Nigeria (TCN)",
    dates: "Jan–Apr 2024",
    type: "Engineering",
    bullets: [
      "Helped control-room engineers monitor power-system parameters through SCADA/EMS interfaces and manual event logs.",
    ],
    tags: ["SCADA/EMS", "Power systems"],
  },
];
