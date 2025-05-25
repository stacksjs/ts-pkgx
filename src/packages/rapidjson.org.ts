export const rapidjsonorgPackage = {
  name: 'rapidjson.org' as const,
  domain: 'rapidjson.org' as const,
  description: 'A fast JSON parser/generator for C++ with both SAX/DOM style API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rapidjson.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +rapidjson.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.1.0',
  ] as const,
  fullPath: 'rapidjson.org' as const,
  aliases: [] as const,
}

export type RapidjsonorgPackage = typeof rapidjsonorgPackage
