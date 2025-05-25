export const ninjabuildorgPackage = {
  name: 'ninja' as const,
  domain: 'ninja-build.org' as const,
  description: 'Small build system for use with gyp or CMake' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ninja-build.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ninja' as const,
  programs: [
    'ninja',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.12.1',
    '1.12.0',
    '1.11.1',
    '1.11.0',
  ] as const,
  fullPath: 'ninja-build.org' as const,
  aliases: [] as const,
}

export type NinjabuildorgPackage = typeof ninjabuildorgPackage
