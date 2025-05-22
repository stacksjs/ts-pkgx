/**
 * Generated from pkgx.dev data
 */
export const speexorgPackage = {
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
  aliases: [
    "speexdec",
  ] as const,
  name: "speex.org" as const,
  domain: "speex.org" as const,
  description: "Package information for speex.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/speex.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +speex.org -- $SHELL -i" as const,
}

export type SpeexorgPackage = typeof speexorgPackage
