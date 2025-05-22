/**
 * Generated from pkgx.dev data
 */
export const libwebsocketsorgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "libuv.org@1",
    "libevent.org@2",
  ] as const,
  versions: [
    "4.3.5",
    "4.3.4",
    "4.3.3",
    "4.3.2",
  ] as const,
  name: "libwebsockets.org" as const,
  domain: "libwebsockets.org" as const,
  description: "Package information for libwebsockets.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libwebsockets.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libwebsockets.org -- $SHELL -i" as const,
}

export type LibwebsocketsorgPackage = typeof libwebsocketsorgPackage
