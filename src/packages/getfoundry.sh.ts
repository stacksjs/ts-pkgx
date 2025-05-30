export const getfoundryshPackage = {
  name: 'getfoundry.sh' as const,
  domain: 'getfoundry.sh' as const,
  description: 'Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getfoundry.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +getfoundry.sh -- $SHELL -i' as const,
  programs: [
    'forge',
    'anvil',
    'cast',
    'chisel',
  ] as const,
  companions: [] as const,
  dependencies: [
    'git-scm.org^2',
  ] as const,
  versions: [
    '2024.4.12',
    '2023.12.7',
    '2023.7.16',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.0',
    '1.0.0',
    '0.3.0',
  ] as const,
  fullPath: 'getfoundry.sh' as const,
  aliases: [] as const,
}

export type GetfoundryshPackage = typeof getfoundryshPackage
