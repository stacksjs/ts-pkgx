export const elizaosgithubioPackage = {
  name: "elizaOS" as const,
  domain: "elizaOS.github.io" as const,
  description: "Autonomous agents for everyone" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/elizaOS.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) eliza" as const,
  programs: [
    "eliza",
  ] as const,
  companions: [
    "git-scm.org",
    "ffmpeg.org",
  ] as const,
  dependencies: [
    "python.org>=2.7",
    "nodejs.org~23.3",
    "pnpm.io",
  ] as const,
  versions: [
    "0.25.19",
    "0.25.9",
    "0.25.8",
    "0.1.9",
    "0.1.8.1",
    "0.1.7",
  ] as const,
  fullPath: "elizaOS.github.io" as const,
  aliases: [
    "elizaos",
  ] as const,
}

export type ElizaosgithubioPackage = typeof elizaosgithubioPackage
