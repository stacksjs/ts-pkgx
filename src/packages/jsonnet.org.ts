export const jsonnetorgPackage = {
  name: 'jsonnet' as const,
  domain: 'jsonnet.org' as const,
  description: 'Jsonnet - The data templating language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jsonnet.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +jsonnet.org -- $SHELL -i' as const,
  programs: [
    'jsonnet',
    'jsonnetfmt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.21.0',
    '0.20.0',
  ] as const,
  fullPath: 'jsonnet.org' as const,
}

export type JsonnetorgPackage = typeof jsonnetorgPackage
