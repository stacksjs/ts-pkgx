export const agptcoPackage = {
  name: "Auto-GPT" as const,
  domain: "agpt.co" as const,
  description: "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/agpt.co/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) auto-gpt" as const,
  programs: [
    "auto-gpt",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3.10<3.12",
    "redis.io^7",
    "tea.xyz^0",
  ] as const,
  versions: [
    "0.4.7",
    "0.4.6",
    "0.4.5",
    "0.4.4",
    "0.4.3",
    "0.4.2",
    "0.4.0",
    "0.3.1",
    "0.3.0",
  ] as const,
  fullPath: "agpt.co" as const,
  aliases: [
    "auto-gpt",
  ] as const,
}

export type AgptcoPackage = typeof agptcoPackage
