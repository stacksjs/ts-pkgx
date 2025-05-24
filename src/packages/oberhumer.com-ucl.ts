export const oberhumercomuclPackage = {
  name: 'oberhumer.com/ucl' as const,
  domain: 'oberhumer.com/ucl' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oberhumer.com/ucl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +oberhumer.com/ucl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.3.0',
  ] as const,
  fullPath: 'oberhumer.com/ucl' as const,
  aliases: [
    'ucl',
  ] as const,
}

export type OberhumercomuclPackage = typeof oberhumercomuclPackage
