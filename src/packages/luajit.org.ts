export const luajitorgPackage = {
  name: 'luajit' as const,
  domain: 'luajit.org' as const,
  description: 'Mirror of the LuaJIT git repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/luajit.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +luajit.org -- $SHELL -i' as const,
  programs: [
    'luajit',
    'luajit-{{version.marketing}}.',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.1.0',
  ] as const,
  fullPath: 'luajit.org' as const,
}

export type LuajitorgPackage = typeof luajitorgPackage
