export const sonarqubeorgPackage = {
  name: "sonarqube.org" as const,
  domain: "sonarqube.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx sonarqube.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "sonarqube.org" as const,
}

export type SonarqubeorgPackage = typeof sonarqubeorgPackage
