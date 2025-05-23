export const glewsourceforgeioPackage = {
  name: 'glew.sourceforge.io' as const,
  domain: 'glew.sourceforge.io' as const,
  description: 'The OpenGL Extension Wrangler Library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glew.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +glew.sourceforge.io -- $SHELL -i' as const,
  programs: [
    'glewinfo',
    'visualinfo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.2.0',
  ] as const,
  fullPath: 'glew.sourceforge.io' as const,
}

export type GlewsourceforgeioPackage = typeof glewsourceforgeioPackage
