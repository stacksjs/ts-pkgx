export const ladspaorgPackage = {
  name: 'ladspa.org' as const,
  domain: 'ladspa.org' as const,
  description: 'Linux Audio Developer\'s Simple Plugin' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ladspa.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +ladspa.org -- $SHELL -i' as const,
  programs: [
    'analyseplugin',
    'applyplugin',
    'listplugins',
  ] as const,
  companions: [] as const,
  dependencies: [
    'github.com/libsndfile/libsndfile^1.2',
  ] as const,
  versions: [
    '1.17.0',
  ] as const,
  fullPath: 'ladspa.org' as const,
}

export type LadspaorgPackage = typeof ladspaorgPackage
