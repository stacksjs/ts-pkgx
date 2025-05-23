export const oberhumercomuclPackage = {
  name: 'ucl' as const,
  domain: 'oberhumer.com' as const,
  description: 'Package information for oberhumer.com/ucl' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) oberhumer.com/ucl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'oberhumer.com/ucl' as const,
  aliases: [
    'ucl',
  ] as const,
}

export type OberhumercomuclPackage = typeof oberhumercomuclPackage
