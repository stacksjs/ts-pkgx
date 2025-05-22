export const mkcertdevPackage = {
  name: "mkcert" as const,
  domain: "mkcert.dev" as const,
  description: "A simple zero-config tool to make locally trusted development certificates with any names you'd like." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mkcert.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) mkcert" as const,
  programs: [
    "mkcert",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.4.4",
  ] as const,
  fullPath: "mkcert.dev" as const,
}

export type MkcertdevPackage = typeof mkcertdevPackage
