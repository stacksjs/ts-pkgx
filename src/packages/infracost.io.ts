export const infracostioPackage = {
  name: 'infracost' as const,
  domain: 'infracost.io' as const,
  description: 'Cloud cost estimates for Terraform in pull requests💰📉 Shift FinOps Left!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/infracost.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) infracost' as const,
  programs: [
    'infracost',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.10.41',
    '0.10.40',
    '0.10.39',
    '0.10.38',
    '0.10.37',
    '0.10.36',
    '0.10.35',
    '0.10.34',
    '0.10.33',
    '0.10.32',
  ] as const,
  fullPath: 'infracost.io' as const,
  aliases: [] as const,
}

export type InfracostioPackage = typeof infracostioPackage
