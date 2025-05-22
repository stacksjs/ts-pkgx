export const pinnipeddevPackage = {
  name: "pinniped" as const,
  domain: "pinniped.dev" as const,
  description: "Pinniped is the easy, secure way to log in to your Kubernetes clusters." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pinniped.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) pinniped" as const,
  programs: [
    "pinniped",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.39.0",
    "0.38.0",
    "0.37.0",
    "0.36.0",
    "0.35.0",
    "0.34.0",
    "0.33.0",
    "0.32.0",
    "0.31.0",
    "0.30.0",
    "0.29.0",
    "0.28.0",
    "0.27.0",
    "0.26.0",
  ] as const,
  fullPath: "pinniped.dev" as const,
}

export type PinnipeddevPackage = typeof pinnipeddevPackage
