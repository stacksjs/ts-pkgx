export const cmakeorgPackage = {
  name: 'cmake.org' as const,
  domain: 'cmake.org' as const,
  description: 'Mirror of CMake upstream repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cmake.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +cmake.org -- $SHELL -i' as const,
  programs: [
    'cmake',
    'ccmake',
    'cpack',
    'ctest',
  ] as const,
  companions: [] as const,
  dependencies: [
    'curl.se>=5',
    'zlib.net@1',
    'sourceware.org/bzip2@1',
  ] as const,
  versions: [
    '4.0.2',
    '4.0.1',
    '4.0.0',
    '3.31.7',
    '3.31.6',
    '3.31.5',
    '3.31.4',
    '3.31.3',
    '3.31.2',
    '3.31.1',
    '3.31.0',
    '3.30.8',
    '3.30.7',
    '3.30.6',
    '3.30.5',
    '3.30.4',
    '3.30.3',
    '3.30.2',
    '3.30.1',
    '3.30.0',
    '3.29.9',
    '3.29.8',
    '3.29.7',
    '3.29.6',
    '3.29.5',
    '3.29.4',
    '3.29.3',
    '3.29.2',
    '3.29.1',
    '3.29.0',
    '3.28.6',
    '3.28.5',
    '3.28.4',
    '3.28.3',
    '3.28.2',
    '3.28.1',
    '3.28.0',
    '3.27.9',
    '3.27.8',
    '3.27.7',
    '3.27.6',
    '3.27.5',
    '3.27.4',
    '3.27.3',
    '3.27.2',
    '3.27.1',
    '3.27.0',
    '3.26.6',
    '3.26.5',
    '3.26.4',
    '3.26.3',
    '3.26.2',
    '3.26.1',
    '3.26.0',
    '3.25.3',
    '3.25.2',
    '3.25.1',
    '3.24.4',
    '3.24.2',
  ] as const,
  fullPath: 'cmake.org' as const,
  aliases: [] as const,
}

export type CmakeorgPackage = typeof cmakeorgPackage
