export const wait4xdevPackage = {
  name: "wait4x" as const,
  domain: "wait4x.dev" as const,
  description: "Wait4X allows you to wait for a port or a service to enter the requested state." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/wait4x.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) wait4x" as const,
  programs: [
    "wait4x",
  ] as const,
  companions: [
    "curl.se/ca-certs",
  ] as const,
  dependencies: [] as const,
  versions: [
    "3.3.1",
    "3.3.0",
    "3.2.0",
    "3.1.0",
    "3.0.0",
    "2.14.3",
    "2.14.2",
  ] as const,
  fullPath: "wait4x.dev" as const,
}

export type Wait4xdevPackage = typeof wait4xdevPackage
