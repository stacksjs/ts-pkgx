/**
 * Generated from pkgx.dev data
 */
export const sshxioPackage = {
  programs: [
    "sshx",
  ] as const,
  companions: [] as const,
  dependencies: [
    "protobuf.dev",
  ] as const,
  versions: [
    "2023.11.14",
  ] as const,
  name: "sshx.io" as const,
  domain: "sshx.io" as const,
  description: "Package information for sshx.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/sshx.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +sshx.io -- $SHELL -i" as const,
}

export type SshxioPackage = typeof sshxioPackage
