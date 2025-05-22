/**
 * Generated from pkgx.dev data
 */
export const qpdfsourceforgeioPackage = {
  programs: [
    "qpdf",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net^1",
    "libjpeg-turbo.org^2",
    "openssl.org^1.1",
    "gnutls.org^3",
  ] as const,
  versions: [
    "12.2.0",
    "12.1.0",
    "12.0.0",
    "11.10.1",
    "11.10.0",
    "11.9.1",
    "11.9.0",
    "11.8.0",
    "11.7.0",
    "11.6.4",
  ] as const,
  name: "qpdf.sourceforge.io" as const,
  domain: "qpdf.sourceforge.io" as const,
  description: "Package information for qpdf.sourceforge.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/qpdf.sourceforge.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +qpdf.sourceforge.io -- $SHELL -i" as const,
}

export type QpdfsourceforgeioPackage = typeof qpdfsourceforgeioPackage
