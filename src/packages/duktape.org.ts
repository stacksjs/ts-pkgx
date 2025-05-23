export const duktapeorgPackage = {
  name: 'duk' as const,
  domain: 'duktape.org' as const,
  description: 'Duktape - embeddable Javascript engine with a focus on portability and compact footprint' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/duktape.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) duk' as const,
  programs: [
    'duk',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.7.0',
  ] as const,
  fullPath: 'duktape.org' as const,
}

export type DuktapeorgPackage = typeof duktapeorgPackage
