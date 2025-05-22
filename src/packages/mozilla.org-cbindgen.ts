/**
 * Generated from pkgx.dev data
 */
export const mozillaorgcbindgenPackage = {
  programs: [
    "cbindgen",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxllvm.org",
    "llvm.org",
  ] as const,
  versions: [
    "0.29.0",
    "0.28.0",
    "0.27.0",
    "0.26.0",
  ] as const,
  aliases: [
    "cbindgen",
  ] as const,
  name: "mozilla.org/cbindgen" as const,
  domain: "mozilla.org/cbindgen" as const,
  description: "Package information for mozilla.org/cbindgen" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/cbindgen/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +mozilla.org/cbindgen -- $SHELL -i" as const,
}

export type MozillaorgcbindgenPackage = typeof mozillaorgcbindgenPackage
