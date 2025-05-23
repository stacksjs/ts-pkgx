export const pyinvokeorgPackage = {
  name: 'invoke' as const,
  domain: 'pyinvoke.org' as const,
  description: 'Pythonic task management & command execution.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pyinvoke.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) invoke' as const,
  programs: [
    'invoke',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [
    '2.2.0',
  ] as const,
  fullPath: 'pyinvoke.org' as const,
  aliases: [
    'invoke',
  ] as const,
}

export type PyinvokeorgPackage = typeof pyinvokeorgPackage
