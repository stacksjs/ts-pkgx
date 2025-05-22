export const opuscodecorgPackage = {
  name: "opus-codec.org" as const,
  domain: "opus-codec.org" as const,
  description: "Modern audio compression for the internet." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/opus-codec.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +opus-codec.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.5.2",
    "1.5.1",
    "1.5.0",
    "1.4.0",
    "1.3.1",
  ] as const,
  fullPath: "opus-codec.org" as const,
}

export type OpuscodecorgPackage = typeof opuscodecorgPackage
