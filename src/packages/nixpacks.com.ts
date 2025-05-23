export const nixpackscomPackage = {
  name: 'nixpacks' as const,
  domain: 'nixpacks.com' as const,
  description: 'App source + Nix packages + Docker = Image' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nixpacks.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) nixpacks' as const,
  programs: [
    'nixpacks',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.39.0',
    '1.38.0',
    '1.37.0',
    '1.36.0',
    '1.35.0',
    '1.34.1',
    '1.34.0',
    '1.33.0',
    '1.32.0',
    '1.31.0',
    '1.30.0',
    '1.29.1',
    '1.29.0',
    '1.28.1',
    '1.28.0',
    '1.27.1',
    '1.27.0',
    '1.26.1',
    '1.26.0',
    '1.25.0',
    '1.24.6',
    '1.24.5',
    '1.24.4',
    '1.24.3',
    '1.24.2',
    '1.24.1',
    '1.24.0',
    '1.23.0',
    '1.22.0',
    '1.21.3',
    '1.21.2',
    '1.21.1',
    '1.21.0',
  ] as const,
  fullPath: 'nixpacks.com' as const,
}

export type NixpackscomPackage = typeof nixpackscomPackage
