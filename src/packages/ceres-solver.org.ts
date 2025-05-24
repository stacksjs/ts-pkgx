export const ceressolverorgPackage = {
  name: 'ceres-solver.org' as const,
  domain: 'ceres-solver.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ceres-solver.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +ceres-solver.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'eigen.tuxfamily.org',
    'gflags.github.io',
    'google.com/glog',
    'glaros.dtc.umn.edu/metis',
    'netlib.org/lapack',
    'people.engr.tamu.edu/davis/suitesparse',
    'github.com/oneapi-src/oneTBB',
  ] as const,
  versions: [
    '2.2.0',
    '2.1.0',
  ] as const,
  fullPath: 'ceres-solver.org' as const,
  aliases: [] as const,
}

export type CeressolverorgPackage = typeof ceressolverorgPackage
