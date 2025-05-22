export const githubcomlucianosrpryeuvPackage = {
  name: "rye-uv" as const,
  domain: "github.com/lucianosrp/rye-uv" as const,
  description: "Simple CLI tool to migrate from Rye to Uv" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lucianosrp/rye-uv/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) rye-uv" as const,
  programs: [
    "rye-uv",
  ] as const,
  companions: [
    "astral.sh/uv",
  ] as const,
  dependencies: [] as const,
  versions: [
    "0.1.3",
  ] as const,
  fullPath: "github.com/lucianosrp/rye-uv" as const,
  aliases: [
    "rye-uv",
    "lucianosrp/rye-uv",
  ] as const,
}

export type GithubcomlucianosrpryeuvPackage = typeof githubcomlucianosrpryeuvPackage
