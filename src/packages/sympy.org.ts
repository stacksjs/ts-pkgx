export const sympyorgPackage = {
  name: 'sympy.org' as const,
  domain: 'sympy.org' as const,
  description: 'A computer algebra system written in pure Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sympy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +sympy.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'python.org>=3.11',
  ] as const,
  versions: [
    '1.14.0',
    '1.13.3',
    '1.13.2',
    '1.13.1',
    '1.13.0',
    '1.12.1',
    '1.12.0',
  ] as const,
  fullPath: 'sympy.org' as const,
  aliases: [] as const,
}

export type SympyorgPackage = typeof sympyorgPackage
