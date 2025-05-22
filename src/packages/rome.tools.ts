export const rometoolsPackage = {
  name: "rome" as const,
  domain: "rome.tools" as const,
  description: "Unified developer tools for JavaScript, TypeScript, and the web" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rome.tools/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) rome" as const,
  programs: [
    "rome",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.4.2",
  ] as const,
  fullPath: "rome.tools" as const,
}

export type RometoolsPackage = typeof rometoolsPackage
