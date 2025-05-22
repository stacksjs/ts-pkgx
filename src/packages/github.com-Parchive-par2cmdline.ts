export const githubcomparchivepar2cmdlinePackage = {
  name: "par2" as const,
  domain: "github.com/Parchive/par2cmdline" as const,
  description: "Parchive: Parity Archive Volume Set for data recovery" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Parchive/par2cmdline/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +github.com/Parchive/par2cmdline -- $SHELL -i" as const,
  programs: [
    "par2",
    "par2create",
    "par2verify",
    "par2repair",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.0.0",
    "0.8.1",
  ] as const,
  fullPath: "github.com/Parchive/par2cmdline" as const,
  aliases: [
    "par2",
    "Parchive/par2cmdline",
  ] as const,
}

export type Githubcomparchivepar2cmdlinePackage = typeof githubcomparchivepar2cmdlinePackage
