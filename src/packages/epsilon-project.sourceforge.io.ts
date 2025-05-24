export const epsilonprojectsourceforgeioPackage = {
  name: 'epsilon' as const,
  domain: 'epsilon-project.sourceforge.io' as const,
  description: 'Powerful wavelet image compressor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/epsilon-project.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) epsilon' as const,
  programs: [
    'epsilon',
  ] as const,
  companions: [] as const,
  dependencies: [
    'rpm.org/popt',
  ] as const,
  versions: [
    '0.9.2',
  ] as const,
  fullPath: 'epsilon-project.sourceforge.io' as const,
  aliases: [] as const,
}

export type EpsilonprojectsourceforgeioPackage = typeof epsilonprojectsourceforgeioPackage
