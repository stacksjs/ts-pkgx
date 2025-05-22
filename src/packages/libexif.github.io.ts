export const libexifgithubioPackage = {
  name: "libexif.github.io" as const,
  domain: "libexif.github.io" as const,
  description: "A library for parsing, editing, and saving EXIF data" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libexif.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libexif.github.io -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/gettext",
  ] as const,
  versions: [
    "0.6.25",
    "0.6.24",
  ] as const,
  fullPath: "libexif.github.io" as const,
}

export type LibexifgithubioPackage = typeof libexifgithubioPackage
