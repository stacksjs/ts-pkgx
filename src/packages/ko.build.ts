/**
 * Generated from pkgx.dev data
 */
export const kobuildPackage = {
  programs: [
    "ko",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.18.0",
    "0.17.1",
    "0.17.0",
    "0.16.0",
  ] as const,
  name: "ko.build" as const,
  domain: "ko.build" as const,
  description: "Package information for ko.build" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ko.build/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +ko.build -- $SHELL -i" as const,
}

export type KobuildPackage = typeof kobuildPackage
