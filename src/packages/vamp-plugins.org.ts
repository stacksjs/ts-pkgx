/**
 * Generated from pkgx.dev data
 */
export const vamppluginsorgPackage = {
  programs: [
    "vamp-simple-host",
    "vamp-rdf-template-generator",
  ] as const,
  companions: [] as const,
  dependencies: [
    "xiph.org/flac^1.4",
    "xiph.org/ogg^1.3",
    "github.com/libsndfile/libsndfile^1.2",
  ] as const,
  versions: [
    "2.10.0",
    "2.9.0",
  ] as const,
  name: "vamp/plugins.org" as const,
  domain: "vamp/plugins.org" as const,
  description: "Package information for vamp/plugins.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/vamp/plugins.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +vamp/plugins.org -- $SHELL -i" as const,
}

export type VamppluginsorgPackage = typeof vamppluginsorgPackage
