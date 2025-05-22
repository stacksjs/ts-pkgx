export const githubcomgitecosystemgitcredentialmanagerPackage = {
  name: "git-credential-manager" as const,
  domain: "github.com/git-ecosystem/git-credential-manager" as const,
  description: "Secure, cross-platform Git credential storage with authentication to GitHub, Azure Repos, and other popular Git hosting services." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/git-ecosystem/git-credential-manager/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) git-credential-manager" as const,
  programs: [
    "git-credential-manager",
  ] as const,
  companions: [
    "git-scm.org",
  ] as const,
  dependencies: [
    "openssl.org^1.1.1",
    "unicode.org^71",
    "zlib.net^1.3",
    "dotnet.microsoft.com^8.0",
  ] as const,
  versions: [
    "2.6.1",
  ] as const,
  fullPath: "github.com/git-ecosystem/git-credential-manager" as const,
  aliases: [
    "git-credential-manager",
    "git-ecosystem/git-credential-manager",
  ] as const,
}

export type GithubcomgitecosystemgitcredentialmanagerPackage = typeof githubcomgitecosystemgitcredentialmanagerPackage
