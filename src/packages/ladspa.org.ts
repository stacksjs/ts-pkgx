/**
 * Generated from pkgx.dev data
 */
export const ladspaorgPackage = {
  programs: [
    "analyseplugin",
    "applyplugin",
    "listplugins",
  ] as const,
  companions: [] as const,
  dependencies: [
    "github.com/libsndfile/libsndfile^1.2",
  ] as const,
  versions: [
    "1.17.0",
  ] as const,
  name: "ladspa.org" as const,
  domain: "ladspa.org" as const,
  description: "Package information for ladspa.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ladspa.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +ladspa.org -- $SHELL -i" as const,
}

export type LadspaorgPackage = typeof ladspaorgPackage
