/**
 * Generated from pkgx.dev data
 */
export const duktapeorgPackage = {
  programs: [
    "duk",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2.7.0",
  ] as const,
  name: "duktape.org" as const,
  domain: "duktape.org" as const,
  description: "Package information for duktape.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/duktape.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +duktape.org -- $SHELL -i" as const,
}

export type DuktapeorgPackage = typeof duktapeorgPackage
