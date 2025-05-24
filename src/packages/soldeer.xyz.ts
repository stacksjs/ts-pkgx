export const soldeerxyzPackage = {
  name: 'soldeer' as const,
  domain: 'soldeer.xyz' as const,
  description: 'Solidity Package Manager written in rust and integrated into Foundry (forge soldeer ...)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/soldeer.xyz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) soldeer' as const,
  programs: [
    'soldeer',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.5.4',
    '0.5.3',
    '0.5.2',
  ] as const,
  fullPath: 'soldeer.xyz' as const,
  aliases: [] as const,
}

export type SoldeerxyzPackage = typeof soldeerxyzPackage
