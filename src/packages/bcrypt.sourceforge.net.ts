export const bcryptsourceforgenetPackage = {
  name: "bcrypt" as const,
  domain: "bcrypt.sourceforge.net" as const,
  description: "Cross platform file encryption utility using blowfish" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/bcrypt.sourceforge.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) bcrypt" as const,
  programs: [
    "bcrypt",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net",
  ] as const,
  versions: [
    "1.1.0",
  ] as const,
  fullPath: "bcrypt.sourceforge.net" as const,
}

export type BcryptsourceforgenetPackage = typeof bcryptsourceforgenetPackage
