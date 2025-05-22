/**
 * Generated from pkgx.dev data
 */
export const wimlibnetPackage = {
  programs: [
    "mkwinpeimg",
    "wimappend",
    "wimapply",
    "wimapply",
    "wimdelete",
    "wimdir",
    "wimexport",
    "wimextract",
    "wiminfo",
    "wimjoin",
    "wimlib-imagex",
    "wimmount",
    "wimmountrw",
    "wimoptimize",
    "wimsplit",
    "wimunmount",
    "wimupdate",
    "wimverify",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^3.1.0",
    "gnome.org/libxml2",
  ] as const,
  versions: [
    "1.14.4",
    "1.14.3",
    "1.14.1",
  ] as const,
  name: "wimlib.net" as const,
  domain: "wimlib.net" as const,
  description: "Package information for wimlib.net" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/wimlib.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +wimlib.net -- $SHELL -i" as const,
}

export type WimlibnetPackage = typeof wimlibnetPackage
