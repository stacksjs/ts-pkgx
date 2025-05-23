export const oraslandPackage = {
  name: 'oras' as const,
  domain: 'oras.land' as const,
  description: 'OCI registry client - managing content like artifacts, images, packages' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oras.land/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) oras' as const,
  programs: [
    'oras',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.2.3',
    '1.2.2',
    '1.2.1',
    '1.2.0',
  ] as const,
  fullPath: 'oras.land' as const,
}

export type OraslandPackage = typeof oraslandPackage
