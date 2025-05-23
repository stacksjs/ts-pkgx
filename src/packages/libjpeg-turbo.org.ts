export const libjpegturboorgPackage = {
  name: 'libjpeg-turbo.org' as const,
  domain: 'libjpeg-turbo.org' as const,
  description: 'Main libjpeg-turbo repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libjpeg-turbo.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +libjpeg-turbo.org -- $SHELL -i' as const,
  programs: [
    'cjpeg',
    'djpeg',
    'jpegtran',
    'rdjpgcom',
    'tjbench',
    'wrjpgcom',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '3.1.0',
    '3.0.4',
    '3.0.3',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.1.5.1',
  ] as const,
  fullPath: 'libjpeg-turbo.org' as const,
}

export type LibjpegturboorgPackage = typeof libjpegturboorgPackage
