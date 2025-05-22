export const speexorgPackage = {
  name: "speexdec" as const,
  domain: "speex.org" as const,
  description: "Audio codec designed for speech" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/speex.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) speexdec" as const,
  programs: [
    "speexdec",
  ] as const,
  companions: [] as const,
  dependencies: [
    "xiph.org/ogg",
  ] as const,
  versions: [
    "1.2.1",
  ] as const,
  fullPath: "speex.org" as const,
  aliases: [
    "speexdec",
  ] as const,
}

export type SpeexorgPackage = typeof speexorgPackage
