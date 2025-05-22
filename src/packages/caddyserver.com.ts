/**
 * Generated from pkgx.dev data
 */
export const caddyservercomPackage = {
  programs: [
    "caddy",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2.10.0",
    "2.9.1",
    "2.9.0",
    "2.8.4",
    "2.8.2",
    "2.8.1",
    "2.8.0",
    "2.7.6",
    "2.7.5",
    "2.7.4",
  ] as const,
  name: "caddyserver.com" as const,
  domain: "caddyserver.com" as const,
  description: "Package information for caddyserver.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/caddyserver.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +caddyserver.com -- $SHELL -i" as const,
}

export type CaddyservercomPackage = typeof caddyservercomPackage
