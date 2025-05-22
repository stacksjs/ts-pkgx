export const etcdioPackage = {
  name: "etcd" as const,
  domain: "etcd.io" as const,
  description: "Distributed reliable key-value store for the most critical data of a distributed system" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/etcd.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +etcd.io -- $SHELL -i" as const,
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
  fullPath: "etcd.io" as const,
}

export type EtcdioPackage = typeof etcdioPackage
