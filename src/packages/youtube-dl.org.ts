/**
 * Generated from pkgx.dev data
 */
export const youtubedlorgPackage = {
  programs: [
    "youtube-dl",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3<3.12",
  ] as const,
  versions: [
    "2023.8.4",
    "2021.12.17",
  ] as const,
  name: "youtube/dl.org" as const,
  domain: "youtube/dl.org" as const,
  description: "Package information for youtube/dl.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/youtube/dl.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +youtube/dl.org -- $SHELL -i" as const,
}

export type YoutubedlorgPackage = typeof youtubedlorgPackage
