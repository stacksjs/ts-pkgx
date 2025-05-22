/**
 * Generated from pkgx.dev data
 */
export const curlieioPackage = {
  programs: [
    "curlie",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.8.2",
    "1.7.2",
  ] as const,
  name: "curlie.io" as const,
  domain: "curlie.io" as const,
  description: "Package information for curlie.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/curlie.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +curlie.io -- $SHELL -i" as const,
}

export type CurlieioPackage = typeof curlieioPackage
