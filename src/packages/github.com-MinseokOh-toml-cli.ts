export const githubcomminseokohtomlcliPackage = {
  name: "toml-cli" as const,
  domain: "github.com/MinseokOh/toml-cli" as const,
  description: "A simple CLI for editing and querying TOML files." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/MinseokOh/toml-cli/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) toml-cli" as const,
  programs: [
    "toml-cli",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.1.1",
  ] as const,
  fullPath: "github.com/MinseokOh/toml-cli" as const,
  aliases: [
    "toml-cli",
    "MinseokOh/toml-cli",
  ] as const,
}

export type GithubcomminseokohtomlcliPackage = typeof githubcomminseokohtomlcliPackage
