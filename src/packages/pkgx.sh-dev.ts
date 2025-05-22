export const pkgxshdevPackage = {
  name: "dev" as const,
  domain: "pkgx.sh/dev" as const,
  description: "isolated `dev` environments" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) dev" as const,
  programs: [
    "dev",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1,^2.1",
  ] as const,
  versions: [
    "1.8.1",
    "1.8.0",
    "1.7.0",
    "1.6.0",
    "1.5.0",
    "1.4.0",
    "1.3.0",
    "1.2.0",
    "1.1.0",
    "1.0.2",
    "1.0.1",
    "1.0.0",
  ] as const,
  fullPath: "pkgx.sh/dev" as const,
  aliases: [
    "dev",
  ] as const,
}

export type PkgxshdevPackage = typeof pkgxshdevPackage
