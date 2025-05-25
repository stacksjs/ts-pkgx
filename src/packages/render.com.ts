export const rendercomPackage = {
  name: 'render' as const,
  domain: 'render.com' as const,
  description: 'Command-line interface for Render' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/render.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) render' as const,
  programs: [
    'render',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.1.11',
    '0.1.10',
    '0.1.9',
    '0.1.8',
    '0.1.7',
    '0.1.5',
  ] as const,
  fullPath: 'render.com' as const,
  aliases: [] as const,
}

export type RendercomPackage = typeof rendercomPackage
