// Tech stack, grouped into clusters shown as pill badges.
// Checked against each repo's README and requirements.txt.
// Power BI, Flask and Docker are listed at Malachy's request.

export type SkillCluster = {
  title: string;
  skills: string[];
  showOnHome?: boolean; // the Home page shows a shorter set; About shows all
};

export const skillClusters: SkillCluster[] = [
  {
    title: "Languages",
    showOnHome: true,
    skills: ["Python", "SQL (T-SQL)"],
  },
  {
    title: "Data science & ML",
    showOnHome: true,
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Classification (binary & multi-class)",
      "Regression",
      "Logistic regression",
      "K-Means clustering",
      "Feature engineering & selection",
      "Cross-validation",
      "Model evaluation (accuracy, F1)",
      "joblib model persistence",
    ],
  },
  {
    title: "Data analysis & statistics",
    showOnHome: true,
    skills: [
      "EDA",
      "Data cleaning & validation",
      "Segmentation",
      "Hypothesis testing (chi-square, Cramér's V)",
      "Lead scoring & gains analysis",
    ],
  },
  {
    title: "Data visualization & BI",
    showOnHome: true,
    skills: [
      "Matplotlib",
      "Seaborn",
      "Excel dashboards (PivotTables, PivotCharts, slicers)",
      "Power BI",
    ],
  },
  {
    title: "Excel (advanced)",
    skills: [
      "Dynamic arrays (LET, XLOOKUP, UNIQUE, FILTER, SORTBY, TAKE)",
      "COUNTIFS",
      "CHISQ.TEST",
      "GETPIVOTDATA",
      "Data validation",
      "Conditional formatting",
      "Named ranges",
    ],
  },
  {
    title: "Data engineering & SQL",
    showOnHome: true,
    skills: [
      "SQL Server",
      "BULK INSERT ETL",
      "Medallion architecture (Bronze/Silver/Gold)",
      "Star-schema modelling",
      "Data quality & reconciliation tests",
      "sqlcmd",
    ],
  },
  {
    title: "GenAI & LLMs",
    showOnHome: true,
    skills: [
      "LangChain",
      "RAG",
      "Groq LLM",
      "FAISS vector store",
      "Hybrid retrieval (dense + BM25)",
      "Cross-Encoder reranking",
      "HuggingFace embeddings",
      "Sentence Transformers",
    ],
  },
  {
    title: "Apps & tools",
    skills: ["Streamlit", "Flask", "Jupyter", "Docker", "Git/GitHub", "Dev Containers"],
  },
];
