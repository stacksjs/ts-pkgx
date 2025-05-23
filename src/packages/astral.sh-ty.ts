export const astralshtyPackage = {
  name: 'ty' as const,
  domain: 'astral.sh/ty' as const,
  description: 'An extremely fast Python type checker and language server, written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/astral.sh/ty/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ty' as const,
  programs: [
    'ty',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pkgx.sh@1',
  ] as const,
  versions: [
    '0.0.0.8',
  ] as const,
  fullPath: 'astral.sh/ty' as const,
  aliases: [
    'ty',
  ] as const,
}

export type AstralshtyPackage = typeof astralshtyPackage
