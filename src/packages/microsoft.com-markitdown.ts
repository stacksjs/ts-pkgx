export const microsoftcommarkitdownPackage = {
  name: "markitdown" as const,
  domain: "microsoft.com/markitdown" as const,
  description: "Python tool for converting files and office documents to Markdown." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/markitdown/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) markitdown" as const,
  programs: [
    "markitdown",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1",
  ] as const,
  versions: [
    "0.0.1.3",
  ] as const,
  fullPath: "microsoft.com/markitdown" as const,
  aliases: [
    "markitdown",
  ] as const,
}

export type MicrosoftcommarkitdownPackage = typeof microsoftcommarkitdownPackage
