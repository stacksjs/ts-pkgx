export const microsoftcomcodecliPackage = {
  name: "vscode cli" as const,
  domain: "microsoft.com/code-cli" as const,
  description: "Command-line interface built-in Visual Studio Code" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/code-cli/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) code" as const,
  programs: [
    "code",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org@1.1",
    "zlib.net@1",
  ] as const,
  versions: [
    "1.100.2",
    "1.100.1",
    "1.100.0",
    "1.99.3",
    "1.99.2",
    "1.99.1",
    "1.99.0",
    "1.98.2",
    "1.98.1",
    "1.98.0",
    "1.97.2",
  ] as const,
  fullPath: "microsoft.com/code-cli" as const,
  aliases: [
    "vscode cli",
    "code-cli",
  ] as const,
}

export type MicrosoftcomcodecliPackage = typeof microsoftcomcodecliPackage
