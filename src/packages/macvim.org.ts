export const macvimorgPackage = {
  name: 'macvim.org' as const,
  domain: 'macvim.org' as const,
  description: 'Vim - the text editor - for macOS' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/macvim.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +macvim.org -- $SHELL -i' as const,
  programs: [
    'gview',
    'gvim',
    'gvimdiff',
    'gvimtutor',
    'mview',
    'mvim',
    'mvimdiff',
    'mvimtutor',
    'view',
    'vim',
    'vimdiff',
    'vimtutor',
  ] as const,
  companions: [] as const,
  dependencies: [
    'cscope.sourceforge.io',
    'invisible-island.net/ncurses',
    'lua.org',
    'python.org~3.11',
    'ruby-lang.org',
    'libsodium.org',
    'gnu.org/gettext',
  ] as const,
  versions: [
    '181.0.0',
    '180.0.0',
    '179.0.0',
    '178.0.0',
    '177.0.0',
  ] as const,
  fullPath: 'macvim.org' as const,
  aliases: [] as const,
}

export type MacvimorgPackage = typeof macvimorgPackage
