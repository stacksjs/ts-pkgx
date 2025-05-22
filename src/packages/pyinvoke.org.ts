/**
 * Generated from pkgx.dev data
 */
export const pyinvokeorgPackage = {
  programs: [
    "invoke",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1",
  ] as const,
  versions: [
    "2.2.0",
  ] as const,
  aliases: [
    "invoke",
  ] as const,
  name: "pyinvoke.org" as const,
  domain: "pyinvoke.org" as const,
  description: "Package information for pyinvoke.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pyinvoke.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +pyinvoke.org -- $SHELL -i" as const,
}

export type PyinvokeorgPackage = typeof pyinvokeorgPackage
