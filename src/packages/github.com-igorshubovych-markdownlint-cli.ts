export const githubcomigorshubovychmarkdownlintcliPackage = {
  name: "markdownlint" as const,
  domain: "github.com/igorshubovych/markdownlint-cli" as const,
  description: "CLI for Node.js style checker and lint tool for Markdown files" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/igorshubovych/markdownlint-cli/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) markdownlint" as const,
  programs: [
    "markdownlint",
  ] as const,
  companions: [] as const,
  dependencies: [
    "nodejs.org^18",
  ] as const,
  versions: [
    "0.45.0",
    "0.44.0",
    "0.43.0",
    "0.42.0",
  ] as const,
  fullPath: "github.com/igorshubovych/markdownlint-cli" as const,
  aliases: [
    "markdownlint",
    "igorshubovych/markdownlint-cli",
  ] as const,
}

export type GithubcomigorshubovychmarkdownlintcliPackage = typeof githubcomigorshubovychmarkdownlintcliPackage
