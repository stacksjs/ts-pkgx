export const trippyclirsPackage = {
  name: "trip" as const,
  domain: "trippy.cli.rs" as const,
  description: "Network diagnostic tool, inspired by mtr" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/trippy.cli.rs/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) trip" as const,
  programs: [
    "trip",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.13.0",
    "0.12.2",
    "0.12.1",
    "0.12.0",
    "0.11.0",
    "0.10.0",
    "0.9.0",
  ] as const,
  fullPath: "trippy.cli.rs" as const,
}

export type TrippyclirsPackage = typeof trippyclirsPackage
