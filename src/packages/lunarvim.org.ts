export const lunarvimorgPackage = {
  name: 'lunarvim.org' as const,
  domain: 'lunarvim.org' as const,
  description: '🌙 LunarVim is an IDE layer for Neovim. Completely free and community driven.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lunarvim.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +lunarvim.org -- $SHELL -i' as const,
  programs: [
    'lvim',
    'nvim',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnu.org/bash',
    'crates.io/fd-find',
    'pip.pypa.io',
    'python.org^3',
    'nodejs.org',
    'rust-lang.org/cargo',
    'neovim.io',
  ] as const,
  versions: [
    '1.4.0',
    '1.3.0',
  ] as const,
  fullPath: 'lunarvim.org' as const,
  aliases: [] as const,
}

export type LunarvimorgPackage = typeof lunarvimorgPackage
