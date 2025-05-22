export const s3toolsorgPackage = {
  name: "s3cmd" as const,
  domain: "s3tools.org" as const,
  description: "Official s3cmd repo -- Command line tool for managing S3 compatible storage services (including Amazon S3 and CloudFront)." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/s3tools.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) s3cmd" as const,
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
  fullPath: "s3tools.org" as const,
  aliases: [
    "s3cmd",
  ] as const,
}

export type S3toolsorgPackage = typeof s3toolsorgPackage
