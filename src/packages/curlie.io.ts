export const curlieioPackage = {
  name: "curlie" as const,
  domain: "curlie.io" as const,
  description: "The power of curl, the ease of use of httpie." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/curlie.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) curlie" as const,
  programs: [
    "curlie",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.8.2",
    "1.7.2",
  ] as const,
  fullPath: "curlie.io" as const,
}

export type CurlieioPackage = typeof curlieioPackage
