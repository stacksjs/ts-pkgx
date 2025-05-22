export const minioPackage = {
  name: "minio" as const,
  domain: "min.io" as const,
  description: "MinIO is a high-performance, S3 compatible object store, open sourced under GNU AGPLv3 license." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/min.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) minio" as const,
  programs: [
    "minio",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2023.10.25.6.33.25",
  ] as const,
  fullPath: "min.io" as const,
  aliases: [
    "minio",
  ] as const,
}

export type MinioPackage = typeof minioPackage
