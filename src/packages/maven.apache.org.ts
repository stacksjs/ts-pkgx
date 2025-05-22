/**
 * Generated from pkgx.dev data
 */
export const mavenapacheorgPackage = {
  programs: [
    "mvn",
    "mvnDebug",
    "mvnyjp",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openjdk.org",
  ] as const,
  versions: [
    "3.9.9",
    "3.9.8",
    "3.9.7",
    "3.9.6",
    "3.9.5",
    "3.9.4",
    "3.9.3",
    "3.8.7",
    "3.6.3",
  ] as const,
  aliases: [
    "mvn",
  ] as const,
  name: "maven.apache.org" as const,
  domain: "maven.apache.org" as const,
  description: "Package information for maven.apache.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/maven.apache.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +maven.apache.org -- $SHELL -i" as const,
}

export type MavenapacheorgPackage = typeof mavenapacheorgPackage
