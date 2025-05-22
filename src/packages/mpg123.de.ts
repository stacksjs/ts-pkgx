export const mpg123dePackage = {
  name: "mpg123" as const,
  domain: "mpg123.de" as const,
  description: "MP3 player for Linux and UNIX" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mpg123.de/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) mpg123" as const,
  programs: [
    "mpg123",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.32.10",
    "1.32.9",
    "1.32.8",
    "1.32.7",
    "1.32.6",
    "1.32.5",
    "1.32.4",
    "1.32.3",
    "1.32.2",
    "1.32.1",
    "1.32.0",
    "1.31.2",
  ] as const,
  fullPath: "mpg123.de" as const,
}

export type Mpg123dePackage = typeof mpg123dePackage
