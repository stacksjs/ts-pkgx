export const mercurialscmorgPackage = {
  name: 'mercurial-scm.org' as const,
  domain: 'mercurial-scm.org' as const,
  description: 'Scalable distributed version control system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mercurial-scm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +mercurial-scm.org -- $SHELL -i' as const,
  programs: [
    'hg',
    'chg',
  ] as const,
  companions: [] as const,
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [
    '7.0.2',
    '7.0.1',
    '7.0.0',
    '6.9.5',
    '6.9.4',
    '6.9.3',
    '6.9.2',
    '6.9.1',
    '6.9.0',
    '6.8.2',
    '6.8.1',
    '6.8.0',
    '6.7.4',
    '6.7.3',
    '6.7.2',
    '6.7.1',
    '6.7.0',
    '6.6.3',
    '6.6.2',
    '6.6.1',
    '6.6.0',
    '6.5.3',
    '6.5.2',
    '6.5.0',
  ] as const,
  fullPath: 'mercurial-scm.org' as const,
}

export type MercurialscmorgPackage = typeof mercurialscmorgPackage
