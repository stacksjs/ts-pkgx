export const dblabdanvergaracomPackage = {
  name: "dblab" as const,
  domain: "dblab.danvergara.com" as const,
  description: "The database client every command line junkie deserves." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/dblab.danvergara.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) dblab" as const,
  programs: [
    "dblab",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.32.0",
    "0.31.0",
    "0.30.1",
    "0.30.0",
    "0.29.0",
    "0.28.1",
    "0.28.0",
    "0.27.0",
    "0.26.0",
    "0.25.0",
    "0.24.1",
    "0.24.0",
    "0.23.0",
    "0.22.0",
    "0.21.0",
  ] as const,
  fullPath: "dblab.danvergara.com" as const,
}

export type DblabdanvergaracomPackage = typeof dblabdanvergaracomPackage
