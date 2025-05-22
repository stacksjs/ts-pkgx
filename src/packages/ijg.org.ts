/**
 * Generated from pkgx.dev data
 */
export const ijgorgPackage = {
  programs: [
    "cjpeg",
    "djpeg",
    "jpegtran",
    "rdjpgcom",
    "wrjpgcom",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "9f",
    "9e",
    "9.5.0",
  ] as const,
  name: "ijg.org" as const,
  domain: "ijg.org" as const,
  description: "Package information for ijg.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ijg.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +ijg.org -- $SHELL -i" as const,
}

export type IjgorgPackage = typeof ijgorgPackage
