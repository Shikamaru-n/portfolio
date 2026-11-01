# Malachy Ugwu: portfolio website

Personal portfolio for Malachy Ugwu, a data scientist and data analyst based in Abuja, Nigeria. It is built with Next.js (App Router), TypeScript, Tailwind CSS and shadcn/ui, and exported as a fully static site.

## Run it locally

Install packages with `npm install`, then start the dev server with `npm run dev` and open http://localhost:3000.

## Build

`npm run build` checks types and writes the finished static site to the `out/` folder.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values. `.env.local` is never committed.

| Variable | When you need it | What it does |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | For the contact form | The Formspree form ID |
| `NEXT_PUBLIC_SITE_URL` | For the live site | The full site address, used for canonical links, social previews and the sitemap |
| `GITHUB_TOKEN` | Optional | A GitHub token with no scopes. It raises the GitHub API limit during builds and is never sent to the browser |

## Editing content

All site text lives in the `content/` folder:

- `profile.ts`: hero, bio, education and interests
- `skills.ts`: tech stack clusters
- `projects.ts`: project cards
- `experience.ts`: the Experience & training timeline
- `site.ts`: navigation, labels and page text

Change the text there and the pages update. The components don't need to change.

## GitHub stats

Project cards show stars, forks and the last update date, fetched from the GitHub API at build time. If the API can't be reached, the build uses the `fallbackStats` values in `content/projects.ts` instead. Stars, forks and the "Most stars" sort option only appear once a repo has more than zero.

## Folder structure

- `app/`: pages, metadata, icons and the social preview image
- `components/`: reusable pieces such as `ProjectCard`, `SkillCluster` and `SectionHeading`
- `content/`: all site text
- `lib/`: GitHub fetching and helpers
- `public/`: images
- `assets/`: files used only at build time (the photo in the social preview image)
- `legacy/`: the old single-page site, kept until the new one is live
