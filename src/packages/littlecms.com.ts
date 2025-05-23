export const littlecmscomPackage = {
  name: 'littlecms.com' as const,
  domain: 'littlecms.com' as const,
  description: 'A free, open source, CMM engine. It provides fast transforms between ICC profiles.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/littlecms.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +littlecms.com -- $SHELL -i' as const,
  programs: [
    'jpgicc',
    'linkicc',
    'psicc',
    'tificc',
    'transicc',
  ] as const,
  companions: [] as const,
  dependencies: [
    'simplesystems.org/libtiff^4',
    'libjpeg-turbo.org^2',
  ] as const,
  versions: [
    '2.17.0',
    '2.16.0',
    '2.15.0',
    '2.12.0',
  ] as const,
  fullPath: 'littlecms.com' as const,
}

export type LittlecmscomPackage = typeof littlecmscomPackage
