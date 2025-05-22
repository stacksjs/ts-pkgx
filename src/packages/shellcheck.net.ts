/**
 * Generated from pkgx.dev data
 */
export const shellchecknetPackage = {
  programs: [
    "shellcheck",
  ] as const,
  companions: [] as const,
  dependencies: [
    "sourceware.org/libffi@3",
  ] as const,
  versions: [
    "0.10.0",
    "0.9.0",
    "0.8.0",
  ] as const,
  name: "shellcheck.net" as const,
  domain: "shellcheck.net" as const,
  description: "Package information for shellcheck.net" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/shellcheck.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +shellcheck.net -- $SHELL -i" as const,
}

export type ShellchecknetPackage = typeof shellchecknetPackage
