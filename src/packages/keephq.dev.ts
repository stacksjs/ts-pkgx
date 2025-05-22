export const keephqdevPackage = {
  name: "keep" as const,
  domain: "keephq.dev" as const,
  description: "The open-source AIOps and alert management platform" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/keephq.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) keep" as const,
  programs: [
    "keep",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3<3.12",
  ] as const,
  versions: [
    "0.0.0",
  ] as const,
  fullPath: "keephq.dev" as const,
}

export type KeephqdevPackage = typeof keephqdevPackage
