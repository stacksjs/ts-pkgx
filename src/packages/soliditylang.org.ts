export const soliditylangorgPackage = {
  name: 'soliditylang.org' as const,
  domain: 'soliditylang.org' as const,
  description: 'Solidity, the Smart Contract Programming Language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/soliditylang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +soliditylang.org -- $SHELL -i' as const,
  programs: [
    'solc',
    'yul-phaser',
  ] as const,
  companions: [] as const,
  dependencies: [
    'boost.org~1.84',
    'linuxgnu.org/gcc/libstdcxx@14',
    'gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [
    '0.8.30',
    '0.8.29',
    '0.8.28',
    '0.8.27',
    '0.8.26',
    '0.8.25',
    '0.8.24',
    '0.8.23',
    '0.8.22',
    '0.8.21',
    '0.8.20',
    '0.8.19',
    '0.8.18',
    '0.8.17',
  ] as const,
  fullPath: 'soliditylang.org' as const,
  aliases: [] as const,
}

export type SoliditylangorgPackage = typeof soliditylangorgPackage
