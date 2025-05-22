export const ktlintgithubioPackage = {
  name: "ktlint" as const,
  domain: "ktlint.github.io" as const,
  description: "An anti-bikeshedding Kotlin linter with built-in formatter" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ktlint.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) ktlint" as const,
  programs: [
    "ktlint",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openjdk.org",
  ] as const,
  versions: [
    "1.6.0",
    "1.5.0",
    "1.4.1",
    "1.4.0",
    "1.3.1",
    "1.3.0",
    "1.2.1",
    "1.2.0",
    "1.1.1",
    "0.49.1",
  ] as const,
  fullPath: "ktlint.github.io" as const,
}

export type KtlintgithubioPackage = typeof ktlintgithubioPackage
