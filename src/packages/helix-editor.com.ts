export const helixeditorcomPackage = {
  name: "hx" as const,
  domain: "helix-editor.com" as const,
  description: "A post-modern modal text editor." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/helix-editor.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) hx" as const,
  programs: [
    "hx",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "25.1.1",
    "25.1.0",
    "24.7.0",
    "24.3.0",
    "23.10.0",
    "23.5.0",
    "23.3.0",
    "22.12.0",
  ] as const,
  fullPath: "helix-editor.com" as const,
  aliases: [
    "hx",
  ] as const,
}

export type HelixeditorcomPackage = typeof helixeditorcomPackage
