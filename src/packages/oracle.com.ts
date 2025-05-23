export const oraclecomPackage = {
  name: 'oracle.com' as const,
  domain: 'oracle.com' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx oracle.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'oracle.com' as const,
}

export type OraclecomPackage = typeof oraclecomPackage
