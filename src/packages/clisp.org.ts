/**
 * Generated from pkgx.dev data
 */
export const clisporgPackage = {
  programs: [
    "clisp",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/libsigsegv^2.14",
    "gnu.org/readline^8.2",
    "github.com/besser82/libxcrypt^4.4",
  ] as const,
  versions: [
    "2.49.92",
  ] as const,
  name: "clisp.org" as const,
  domain: "clisp.org" as const,
  description: "Package information for clisp.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/clisp.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +clisp.org -- $SHELL -i" as const,
}

export type ClisporgPackage = typeof clisporgPackage
