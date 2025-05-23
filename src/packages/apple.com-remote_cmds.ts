export const applecomremote_cmdsPackage = {
  name: "telnet" as const,
  domain: "apple.com/remote_cmds" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/apple.com/remote_cmds/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) telnet" as const,
  programs: [
    "telnet",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "306.0.0",
    "303.141.1",
    "303.0.2",
    "302.0.0",
    "294.0.0",
  ] as const,
  fullPath: "apple.com/remote_cmds" as const,
  aliases: [
    "telnet",
    "remote_cmds",
  ] as const,
}

export type Applecomremote_cmdsPackage = typeof applecomremote_cmdsPackage
