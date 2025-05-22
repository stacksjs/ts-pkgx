/**
 * Generated from pkgx.dev data
 */
export const s3toolsorgPackage = {
  programs: [
    "s3cmd",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3<3.12",
  ] as const,
  versions: [
    "2.4.0",
    "2.3.0",
  ] as const,
  aliases: [
    "s3cmd",
  ] as const,
  name: "s3tools.org" as const,
  domain: "s3tools.org" as const,
  description: "Package information for s3tools.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/s3tools.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +s3tools.org -- $SHELL -i" as const,
}

export type S3toolsorgPackage = typeof s3toolsorgPackage
