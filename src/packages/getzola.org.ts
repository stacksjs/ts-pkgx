export const getzolaorgPackage = {
  name: "zola" as const,
  domain: "getzola.org" as const,
  description: "A fast static site generator in a single binary with everything built-in. https://www.getzola.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/getzola.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) zola" as const,
  programs: [
    "zola",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.20.0",
    "0.19.2",
    "0.19.1",
    "0.19.0",
    "0.18.0",
    "0.17.2",
  ] as const,
  fullPath: "getzola.org" as const,
  aliases: [
    "zola",
  ] as const,
}

export type GetzolaorgPackage = typeof getzolaorgPackage
