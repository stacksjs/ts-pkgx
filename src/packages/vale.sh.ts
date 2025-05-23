export const valeshPackage = {
  name: 'vale.sh' as const,
  domain: 'vale.sh' as const,
  description: 'Package information for vale.sh' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) vale.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'vale.sh' as const,
}

export type ValeshPackage = typeof valeshPackage
