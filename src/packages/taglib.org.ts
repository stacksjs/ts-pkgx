export const tagliborgPackage = {
  name: "taglib-config" as const,
  domain: "taglib.org" as const,
  description: "TagLib Audio Meta-Data Library" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/taglib.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) taglib-config" as const,
  programs: [
    "taglib-config",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net^1",
    "github.com/nemtrif/utfcpp^4",
  ] as const,
  versions: [
    "2.0.2",
    "2.0.1",
    "2.0.0",
    "1.13.1",
  ] as const,
  fullPath: "taglib.org" as const,
  aliases: [
    "taglib-config",
  ] as const,
}

export type TagliborgPackage = typeof tagliborgPackage
