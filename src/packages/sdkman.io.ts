/**
 * Generated from pkgx.dev data
 */
export const sdkmanioPackage = {
  programs: [
    "sdkman-init.sh",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "5.19.0",
    "5.18.2",
  ] as const,
  aliases: [
    "sdkman-init.sh",
  ] as const,
  name: "sdkman.io" as const,
  domain: "sdkman.io" as const,
  description: "Package information for sdkman.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/sdkman.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +sdkman.io -- $SHELL -i" as const,
}

export type SdkmanioPackage = typeof sdkmanioPackage
