export const liblqrwikidotcomPackage = {
  name: 'liblqr.wikidot.com' as const,
  domain: 'liblqr.wikidot.com' as const,
  description: 'Liquid Rescale library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/liblqr.wikidot.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +liblqr.wikidot.com -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'gnome.org/glib',
  ] as const,
  versions: [
    '0.4.3',
    '0.4.2',
  ] as const,
  fullPath: 'liblqr.wikidot.com' as const,
  aliases: [] as const,
}

export type LiblqrwikidotcomPackage = typeof liblqrwikidotcomPackage
