/**
 * Generated from pkgx.dev data
 */
export const borepubPackage = {
  programs: [
    "bore",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.5.3",
    "0.5.2",
    "0.5.1",
    "0.5.0",
  ] as const,
  name: "bore.pub" as const,
  domain: "bore.pub" as const,
  description: "Package information for bore.pub" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/bore.pub/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +bore.pub -- $SHELL -i" as const,
}

export type BorepubPackage = typeof borepubPackage
