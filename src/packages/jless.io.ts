/**
 * Generated from pkgx.dev data
 */
export const jlessioPackage = {
  programs: [
    "jless",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxx.org/xcb@1",
    "x.org/xcb@1",
  ] as const,
  versions: [
    "0.9.0",
  ] as const,
  name: "jless.io" as const,
  domain: "jless.io" as const,
  description: "Package information for jless.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/jless.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +jless.io -- $SHELL -i" as const,
}

export type JlessioPackage = typeof jlessioPackage
