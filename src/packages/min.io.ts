/**
 * Generated from pkgx.dev data
 */
export const minioPackage = {
  programs: [
    "minio",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2023.10.25.6.33.25",
  ] as const,
  aliases: [
    "minio",
  ] as const,
  name: "min.io" as const,
  domain: "min.io" as const,
  description: "Package information for min.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/min.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +min.io -- $SHELL -i" as const,
}

export type MinioPackage = typeof minioPackage
