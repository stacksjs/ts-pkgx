export const clisporgPackage = {
  name: "clisp" as const,
  domain: "clisp.org" as const,
  description: "GNU CLISP, a Common Lisp implementation" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/clisp.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) clisp" as const,
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
  fullPath: "clisp.org" as const,
}

export type ClisporgPackage = typeof clisporgPackage
