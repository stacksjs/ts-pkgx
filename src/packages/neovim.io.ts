/**
 * Generated from pkgx.dev data
 */
export const neovimioPackage = {
  programs: [
    "nvim",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/gettext^0",
  ] as const,
  versions: [
    "0.11.1",
    "0.11.0",
    "0.10.4",
    "0.10.3",
    "0.10.2",
    "0.10.1",
    "0.10.0",
    "0.9.5",
    "0.9.4",
    "0.9.2",
    "0.9.1",
    "0.9.0",
    "0.8.2",
    "0.8.1",
  ] as const,
  aliases: [
    "nvim",
  ] as const,
  name: "neovim.io" as const,
  domain: "neovim.io" as const,
  description: "Package information for neovim.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/neovim.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +neovim.io -- $SHELL -i" as const,
}

export type NeovimioPackage = typeof neovimioPackage
