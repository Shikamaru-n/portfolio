// Fetches repo stats from the GitHub API when the site is built.
// This file only runs on the server during `npm run build`, so GITHUB_TOKEN
// never reaches the browser. If the API fails or rate-limits, each project
// falls back to the static values in content/projects.ts.

import { profile } from "@/content/profile";
import type { Project } from "@/content/projects";

export type RepoStats = {
  stars: number;
  forks: number;
  updated: string; // ISO date of the last push
  source: "github" | "fallback";
};

type GitHubRepo = {
  stargazers_count?: number;
  forks_count?: number;
  pushed_at?: string;
};

async function getRepoStats(project: Project): Promise<RepoStats> {
  const token = process.env.GITHUB_TOKEN;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${profile.githubUser}/${project.repo}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "malachy-ugwu-portfolio",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(8000),
        cache: "force-cache",
      },
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = (await res.json()) as GitHubRepo;
    return {
      stars: data.stargazers_count ?? project.fallbackStats.stars,
      forks: data.forks_count ?? project.fallbackStats.forks,
      updated: data.pushed_at ?? project.fallbackStats.updated,
      source: "github",
    };
  } catch (error) {
    console.warn(
      `[github] ${project.repo}: using fallback stats (${(error as Error).message})`,
    );
    return { ...project.fallbackStats, source: "fallback" };
  }
}

export async function getStatsByRepo(
  projects: Project[],
): Promise<Record<string, RepoStats>> {
  const entries = await Promise.all(
    projects.map(async (p) => [p.repo, await getRepoStats(p)] as const),
  );
  return Object.fromEntries(entries);
}
