export const githubcomsorahenvchainPackage = {
  name: "envchain" as const,
  domain: "github.com/sorah/envchain" as const,
  description: "Environment variables meet macOS Keychain and gnome-keyring <3" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sorah/envchain/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) envchain" as const,
  programs: [
    "envchain",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxgnu.org/readlinegnome.org/libsecret",
    "gnu.org/readline",
    "gnome.org/libsecret",
  ] as const,
  versions: [
    "1.1.0",
  ] as const,
  fullPath: "github.com/sorah/envchain" as const,
  aliases: [
    "envchain",
    "sorah/envchain",
  ] as const,
}

export type GithubcomsorahenvchainPackage = typeof githubcomsorahenvchainPackage
