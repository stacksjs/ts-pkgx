/**
 * Generated from pkgx.dev data
 */
export const tesseractocrgithubioPackage = {
  programs: [
    "tesseract",
  ] as const,
  companions: [] as const,
  dependencies: [
    "cairographics.org@1",
    "unicode.org@71",
    "leptonica.org",
    "libarchive.org",
    "gnome.org/pango@1",
  ] as const,
  versions: [
    "5.5.0",
    "5.4.1",
    "5.4.0",
    "5.3.4",
    "5.3.3",
    "5.3.2",
    "5.3.1",
    "5.3.0",
  ] as const,
  name: "tesseract/ocr.github.io" as const,
  domain: "tesseract/ocr.github.io" as const,
  description: "Package information for tesseract/ocr.github.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tesseract/ocr.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +tesseract/ocr.github.io -- $SHELL -i" as const,
}

export type TesseractocrgithubioPackage = typeof tesseractocrgithubioPackage
