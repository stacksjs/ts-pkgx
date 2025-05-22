/**
 * Generated from pkgx.dev data
 */
export const terratagioPackage = {
  programs: [
    "terratag",
  ] as const,
  companions: [] as const,
  dependencies: [
    "terraform.io>=0.12",
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "0.7.2",
    "0.7.1",
    "0.7.0",
    "0.6.1",
    "0.6.0",
    "0.5.3",
    "0.5.2",
    "0.5.1",
    "0.5.0",
    "0.4.1",
    "0.4.0",
    "0.3.5",
    "0.3.4",
    "0.3.3",
    "0.3.2",
    "0.3.1",
    "0.3.0",
    "0.2.6",
  ] as const,
  name: "terratag.io" as const,
  domain: "terratag.io" as const,
  description: "Package information for terratag.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/terratag.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +terratag.io -- $SHELL -i" as const,
}

export type TerratagioPackage = typeof terratagioPackage
