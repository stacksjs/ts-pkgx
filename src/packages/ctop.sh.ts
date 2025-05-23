export const ctopshPackage = {
  name: 'ctop' as const,
  domain: 'ctop.sh' as const,
  description: 'Top-like interface for container metrics' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ctop.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ctop' as const,
  programs: [
    'ctop',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.7.7',
  ] as const,
  fullPath: 'ctop.sh' as const,
}

export type CtopshPackage = typeof ctopshPackage
