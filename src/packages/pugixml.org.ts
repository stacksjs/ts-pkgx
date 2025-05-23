export const pugixmlorgPackage = {
  name: 'pugixml.org' as const,
  domain: 'pugixml.org' as const,
  description: 'Light-weight, simple and fast XML parser for C++ with XPath support' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pugixml.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +pugixml.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.15.0',
    '1.14.0',
    '1.13.0',
  ] as const,
  fullPath: 'pugixml.org' as const,
}

export type PugixmlorgPackage = typeof pugixmlorgPackage
