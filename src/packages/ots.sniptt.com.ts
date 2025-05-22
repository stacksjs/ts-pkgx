export const otssnipttcomPackage = {
  name: "ots" as const,
  domain: "ots.sniptt.com" as const,
  description: "🔐 Share end-to-end encrypted secrets with others via a one-time URL" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ots.sniptt.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) ots" as const,
  programs: [
    "ots",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.3.1",
    "0.3.0",
    "0.2.0",
  ] as const,
  fullPath: "ots.sniptt.com" as const,
}

export type OtssnipttcomPackage = typeof otssnipttcomPackage
