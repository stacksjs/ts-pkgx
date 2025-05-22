export const localstackcloudPackage = {
  name: "localstack.cloud" as const,
  domain: "localstack.cloud" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx localstack.cloud" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "localstack.cloud" as const,
}

export type LocalstackcloudPackage = typeof localstackcloudPackage
