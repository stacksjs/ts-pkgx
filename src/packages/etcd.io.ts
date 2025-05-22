/**
 * Generated from pkgx.dev data
 */
export const etcdioPackage = {
  programs: [
    "etcd",
    "etcdctl",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "3.6.0",
    "3.5.21",
    "3.5.20",
    "3.5.19",
    "3.5.18",
    "3.5.17",
    "3.5.16",
    "3.5.15",
    "3.5.14",
    "3.4.37",
    "3.4.36",
  ] as const,
  name: "etcd.io" as const,
  domain: "etcd.io" as const,
  description: "Package information for etcd.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/etcd.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +etcd.io -- $SHELL -i" as const,
}

export type EtcdioPackage = typeof etcdioPackage
