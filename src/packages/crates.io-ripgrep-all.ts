/**
 * Generated from pkgx.dev data
 */
export const cratesioripgrepallPackage = {
  programs: [
    "rga",
    "rga-fzf",
    "rga-fzf-open",
    "rga-preproc",
  ] as const,
  companions: [
    "crates.io/ripgrep",
    "github.com/junegunn/fzf",
  ] as const,
  dependencies: [] as const,
  versions: [
    "0.10.9",
    "0.10.8",
    "0.10.7",
    "0.10.6",
  ] as const,
  aliases: [
    "rga",
    "ripgrep-all",
  ] as const,
  name: "crates.io/ripgrep-all" as const,
  domain: "crates.io/ripgrep-all" as const,
  description: "Package information for crates.io/ripgrep-all" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep-all/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +crates.io/ripgrep-all -- $SHELL -i" as const,
}

export type CratesioripgrepallPackage = typeof cratesioripgrepallPackage
