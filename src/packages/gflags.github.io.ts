export const gflagsgithubioPackage = {
  name: 'gflags.github.io' as const,
  domain: 'gflags.github.io' as const,
  description: 'The gflags package contains a C++ library that implements commandline flags processing. It includes built-in support for standard types such as string and the ability to define flags in the source file in which they are used. Online documentation available at:' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gflags.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +gflags.github.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.2.2',
  ] as const,
  fullPath: 'gflags.github.io' as const,
}

export type GflagsgithubioPackage = typeof gflagsgithubioPackage
