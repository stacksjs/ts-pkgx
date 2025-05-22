export const oauth2proxygithubioPackage = {
  name: "oauth2-proxy" as const,
  domain: "oauth2-proxy.github.io" as const,
  description: "A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/oauth2-proxy.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) oauth2-proxy" as const,
  programs: [
    "oauth2-proxy",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "7.9.0",
    "7.8.2",
    "7.8.1",
    "7.8.0",
    "7.7.1",
    "7.7.0",
    "7.6.0",
  ] as const,
  fullPath: "oauth2-proxy.github.io" as const,
}

export type Oauth2proxygithubioPackage = typeof oauth2proxygithubioPackage
