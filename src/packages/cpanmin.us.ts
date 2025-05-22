/**
 * Generated from pkgx.dev data
 */
export const cpanminusPackage = {
  programs: [
    "cpanm",
  ] as const,
  companions: [] as const,
  dependencies: [
    "perl.org",
  ] as const,
  versions: [
    "1.7048.0",
    "1.7047.0",
    "1.7046.0",
  ] as const,
  name: "cpanmin.us" as const,
  domain: "cpanmin.us" as const,
  description: "Package information for cpanmin.us" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cpanmin.us/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cpanmin.us -- $SHELL -i" as const,
}

export type CpanminusPackage = typeof cpanminusPackage
