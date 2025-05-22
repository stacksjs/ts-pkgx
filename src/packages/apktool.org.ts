/**
 * Generated from pkgx.dev data
 */
export const apktoolorgPackage = {
  programs: [
    "apktool",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openjdk.org^21",
  ] as const,
  versions: [
    "2.11.1",
    "2.11.0",
    "2.10.0",
    "2.9.3",
  ] as const,
  name: "apktool.org" as const,
  domain: "apktool.org" as const,
  description: "Package information for apktool.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/apktool.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +apktool.org -- $SHELL -i" as const,
}

export type ApktoolorgPackage = typeof apktoolorgPackage
