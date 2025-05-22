/**
 * Generated from pkgx.dev data
 */
export const opentofuorgPackage = {
  programs: [
    "tofu",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxgnu.org/gcc/libstdcxx",
    "gnu.org/gcc/libstdcxx",
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "1.9.1",
    "1.9.0",
    "1.8.9",
    "1.8.8",
    "1.8.7",
    "1.8.6",
    "1.8.5",
    "1.8.4",
    "1.8.3",
    "1.8.2",
    "1.8.1",
    "1.8.0",
    "1.7.8",
    "1.7.7",
    "1.7.6",
    "1.7.5",
    "1.7.4",
    "1.7.3",
    "1.6.0.3",
  ] as const,
  aliases: [
    "tofu",
  ] as const,
  name: "opentofu.org" as const,
  domain: "opentofu.org" as const,
  description: "Package information for opentofu.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/opentofu.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +opentofu.org -- $SHELL -i" as const,
}

export type OpentofuorgPackage = typeof opentofuorgPackage
