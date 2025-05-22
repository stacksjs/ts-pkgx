export const getsynthcomPackage = {
  name: "synth" as const,
  domain: "getsynth.com" as const,
  description: "The Declarative Data Generator" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/getsynth.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) synth" as const,
  programs: [
    "synth",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.6.9",
  ] as const,
  fullPath: "getsynth.com" as const,
  aliases: [
    "synth",
  ] as const,
}

export type GetsynthcomPackage = typeof getsynthcomPackage
