export const pluralithcomPackage = {
  name: 'pluralith' as const,
  domain: 'pluralith.com' as const,
  description: 'A tool for Terraform state visualisation and automated generation of infrastructure documentation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pluralith.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pluralith' as const,
  programs: [
    'pluralith',
  ] as const,
  companions: [] as const,
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [
    '0.2.2',
  ] as const,
  fullPath: 'pluralith.com' as const,
}

export type PluralithcomPackage = typeof pluralithcomPackage
