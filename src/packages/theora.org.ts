export const theoraorgPackage = {
  name: "theora.org" as const,
  domain: "theora.org" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/theora.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +theora.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "xiph.org/ogg",
    "xiph.org/vorbis",
  ] as const,
  versions: [
    "1.2.0",
    "1.1.1",
  ] as const,
  fullPath: "theora.org" as const,
}

export type TheoraorgPackage = typeof theoraorgPackage
