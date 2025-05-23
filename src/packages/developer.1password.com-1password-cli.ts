export const developer1passwordcom1passwordcliPackage = {
  name: '1Password CLI' as const,
  domain: 'developer.1password.com/1password-cli' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/developer.1password.com/1password-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) op' as const,
  programs: [
    'op',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.31.0',
    '2.30.3',
  ] as const,
  fullPath: 'developer.1password.com/1password-cli' as const,
  aliases: [
    '1password cli',
    '1password-cli',
  ] as const,
}

export type Developer1passwordcom1passwordcliPackage = typeof developer1passwordcom1passwordcliPackage
