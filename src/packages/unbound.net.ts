/**
 * Generated from pkgx.dev data
 */
export const unboundnetPackage = {
  programs: [
    "unbound",
    "unbound-anchor",
    "unbound-checkconf",
    "unbound-control",
    "unbound-control-setup",
    "unbound-host",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1",
  ] as const,
  versions: [
    "1.23.0",
    "1.22.0",
    "1.21.1",
    "1.21.0",
    "1.20.0",
    "1.19.3",
    "1.19.2",
    "1.19.1",
    "1.19.0",
    "1.18.0",
    "1.17.1",
  ] as const,
  name: "unbound.net" as const,
  domain: "unbound.net" as const,
  description: "Package information for unbound.net" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/unbound.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +unbound.net -- $SHELL -i" as const,
}

export type UnboundnetPackage = typeof unboundnetPackage
