/**
 * Generated from pkgx.dev data
 */
export const scalalangorgPackage = {
  programs: [
    "scalac",
    "scala",
    "scala-cli",
    "sbtn",
    "amm",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openjdk.org",
  ] as const,
  versions: [
    "3.7.0",
    "3.6.4",
    "3.6.3",
    "3.6.2",
    "3.5.2",
    "3.5.1",
    "3.3.6",
    "3.3.5",
  ] as const,
  name: "scala/lang.org" as const,
  domain: "scala/lang.org" as const,
  description: "Package information for scala/lang.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/scala/lang.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +scala/lang.org -- $SHELL -i" as const,
}

export type ScalalangorgPackage = typeof scalalangorgPackage
