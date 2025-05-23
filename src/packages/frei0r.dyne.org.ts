export const frei0rdyneorgPackage = {
  name: 'frei0r.dyne.org' as const,
  domain: 'frei0r.dyne.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/frei0r.dyne.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +frei0r.dyne.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.8.0',
  ] as const,
  fullPath: 'frei0r.dyne.org' as const,
}

export type Frei0rdyneorgPackage = typeof frei0rdyneorgPackage
