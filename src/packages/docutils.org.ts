export const docutilsorgPackage = {
  name: 'docutils.org' as const,
  domain: 'docutils.org' as const,
  description: 'Text processing system for reStructuredText' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docutils.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +docutils.org -- $SHELL -i' as const,
  programs: [
    'docutils',
    'rst2html',
    'rst2html4',
    'rst2html5',
    'rst2latex',
    'rst2man',
    'rst2odt',
    'rst2pseudoxml',
    'rst2s5',
    'rst2xetex',
    'rst2xml',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.1',
    '0.20.0',
    '0.19.0',
  ] as const,
  fullPath: 'docutils.org' as const,
}

export type DocutilsorgPackage = typeof docutilsorgPackage
