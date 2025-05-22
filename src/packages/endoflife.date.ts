export const endoflifedatePackage = {
  name: "eol" as const,
  domain: "endoflife.date" as const,
  description: "CLI to show end-of-life dates for a number of products." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/endoflife.date/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) eol" as const,
  programs: [
    "eol",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org^3.12",
  ] as const,
  versions: [
    "0.22.0",
    "0.21.0",
    "0.20.0",
    "0.19.0",
    "0.18.0",
    "0.17.0",
    "0.16.0",
    "0.15.0",
    "0.14.0",
  ] as const,
  fullPath: "endoflife.date" as const,
  aliases: [
    "eol",
  ] as const,
}

export type EndoflifedatePackage = typeof endoflifedatePackage
