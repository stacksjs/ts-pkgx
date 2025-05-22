export const gitlfscomPackage = {
  name: "git-lfs" as const,
  domain: "git-lfs.com" as const,
  description: "Git extension for versioning large files" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/git-lfs.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) git-lfs" as const,
  programs: [
    "git-lfs",
  ] as const,
  companions: [] as const,
  dependencies: [
    "git-scm.org",
  ] as const,
  versions: [
    "3.6.1",
    "3.6.0",
    "3.5.1",
    "3.4.1",
    "3.4.0",
    "3.3.0",
  ] as const,
  fullPath: "git-lfs.com" as const,
}

export type GitlfscomPackage = typeof gitlfscomPackage
