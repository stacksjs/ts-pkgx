export const terraformdocsioPackage = {
  name: 'terraform-docs' as const,
  domain: 'terraform-docs.io' as const,
  description: 'Generate documentation from Terraform modules in various output formats' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terraform-docs.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) terraform-docs' as const,
  programs: [
    'terraform-docs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.20.0',
    '0.19.0',
    '0.18.0',
    '0.17.0',
    '0.16.0',
  ] as const,
  fullPath: 'terraform-docs.io' as const,
  aliases: [] as const,
}

export type TerraformdocsioPackage = typeof terraformdocsioPackage
