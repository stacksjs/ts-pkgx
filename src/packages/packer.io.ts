export const packerioPackage = {
  name: 'packer' as const,
  domain: 'packer.io' as const,
  description: 'Packer is a tool for creating identical machine images for multiple platforms from a single source configuration.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/packer.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) packer' as const,
  programs: [
    'packer',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.12.0',
    '1.11.2',
    '1.11.1',
    '1.11.0',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.9.5',
    '1.9.4',
    '1.9.3',
    '1.9.2',
  ] as const,
  fullPath: 'packer.io' as const,
}

export type PackerioPackage = typeof packerioPackage
