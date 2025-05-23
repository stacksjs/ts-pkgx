export const typescriptlangorgPackage = {
  name: 'tsc' as const,
  domain: 'typescriptlang.org' as const,
  description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/typescriptlang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) tsc' as const,
  programs: [
    'tsc',
  ] as const,
  companions: [] as const,
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [
    '5.8.3',
    '5.8.2',
    '5.7.3',
    '5.7.2',
    '5.6.3',
    '5.6.2',
    '5.5.4',
    '5.5.3',
    '5.5.2',
    '5.4.5',
    '5.4.4',
    '5.4.3',
    '5.4.2',
  ] as const,
  fullPath: 'typescriptlang.org' as const,
  aliases: [
    'tsc',
  ] as const,
}

export type TypescriptlangorgPackage = typeof typescriptlangorgPackage
