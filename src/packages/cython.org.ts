export const cythonorgPackage = {
  name: 'cython' as const,
  domain: 'cython.org' as const,
  description: 'Compiler for writing C extensions for the Python language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cython.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) cython' as const,
  programs: [
    'cython',
  ] as const,
  companions: [] as const,
  dependencies: [
    'python.org<3.12',
  ] as const,
  versions: [
    '3.1.1',
    '3.1.0',
    '3.0.12',
    '3.0.11',
    '3.0.10',
    '3.0.9',
    '3.0.8',
    '3.0.7',
    '3.0.6',
    '3.0.5',
    '3.0.4',
    '3.0.3',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '0.29.37.1',
    '0.29.37',
    '0.29.36',
    '0.29.35',
  ] as const,
  fullPath: 'cython.org' as const,
  aliases: [] as const,
}

export type CythonorgPackage = typeof cythonorgPackage
