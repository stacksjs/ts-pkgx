/**
 * Generated from pkgx.dev data
 */
export const cephcomcephadmPackage = {
  programs: [
    "cephadm",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
    "python.org^3",
  ] as const,
  versions: [
    "20.3.0",
    "20.0.0",
    "19.3.0",
    "19.2.2",
    "19.2.1",
    "18.2.7",
    "18.2.6",
    "18.2.5",
  ] as const,
  aliases: [
    "cephadm",
  ] as const,
  name: "ceph.com/cephadm" as const,
  domain: "ceph.com/cephadm" as const,
  description: "Package information for ceph.com/cephadm" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ceph.com/cephadm/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +ceph.com/cephadm -- $SHELL -i" as const,
}

export type CephcomcephadmPackage = typeof cephcomcephadmPackage
