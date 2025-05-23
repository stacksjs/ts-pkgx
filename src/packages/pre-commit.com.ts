export const precommitcomPackage = {
  name: 'pre-commit' as const,
  domain: 'pre-commit.com' as const,
  description: 'A framework for managing and maintaining multi-language pre-commit hooks.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pre-commit.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pre-commit' as const,
  programs: [
    'pre-commit',
  ] as const,
  companions: [] as const,
  dependencies: [
    'python.org>=3.8<3.12',
  ] as const,
  versions: [
    '4.2.0',
    '4.1.0',
    '4.0.1',
    '4.0.0',
    '3.8.0',
    '3.7.1',
    '3.7.0',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.0',
    '3.4.0',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.1',
    '3.1.0',
    '3.0.4',
  ] as const,
  fullPath: 'pre-commit.com' as const,
}

export type PrecommitcomPackage = typeof precommitcomPackage
