export const jlessioPackage = {
  name: "jless" as const,
  domain: "jless.io" as const,
  description: "jless is a command-line JSON viewer designed for reading, exploring, and searching through JSON data." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/jless.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) jless" as const,
  programs: [
    "jless",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxx.org/xcb@1",
    "x.org/xcb@1",
  ] as const,
  versions: [
    "0.9.0",
  ] as const,
  fullPath: "jless.io" as const,
}

export type JlessioPackage = typeof jlessioPackage
