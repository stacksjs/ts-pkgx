export const cointopshPackage = {
  name: 'cointop' as const,
  domain: 'cointop.sh' as const,
  description: 'A fast and lightweight interactive terminal based UI application for tracking cryptocurrencies 🚀' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cointop.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) cointop' as const,
  programs: [
    'cointop',
  ] as const,
  companions: [] as const,
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [
    '1.6.10',
  ] as const,
  fullPath: 'cointop.sh' as const,
  aliases: [] as const,
}

export type CointopshPackage = typeof cointopshPackage
