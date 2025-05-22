export const gitquickstatsshPackage = {
  name: "git-quick-stats" as const,
  domain: "git-quick-stats.sh" as const,
  description: "▁▅▆▃▅ Git quick statistics is a simple and efficient way to access various statistics in git repository." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/git-quick-stats.sh/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) git-quick-stats" as const,
  programs: [
    "git-quick-stats",
  ] as const,
  companions: [
    "gnu.org/coreutils",
  ] as const,
  dependencies: [
    "git-scm.org",
    "gnu.org/bash",
    "linuxgithub.com/util-linux/util-linux",
    "github.com/util-linux/util-linux",
  ] as const,
  versions: [
    "2.5.8",
    "2.5.7",
    "2.5.6",
    "2.5.5",
    "2.5.4",
    "2.5.3",
    "2.5.2",
    "2.5.1",
    "2.5.0",
    "2.4.1",
  ] as const,
  fullPath: "git-quick-stats.sh" as const,
}

export type GitquickstatsshPackage = typeof gitquickstatsshPackage
