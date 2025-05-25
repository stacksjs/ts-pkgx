export const opensearchorgPackage = {
  name: 'opensearch' as const,
  domain: 'opensearch.org' as const,
  description: '🔎 Open source distributed and RESTful search engine.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opensearch.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +opensearch.org -- $SHELL -i' as const,
  programs: [
    'opensearch',
    'opensearch-keystore',
    'opensearch-plugin',
    'opensearch-shard',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openjdk.org^21',
    'openmp.llvm.org^17',
  ] as const,
  versions: [
    '3.0.0',
    '2.19.1',
    '2.18.0',
    '2.17.1',
    '2.17.0',
    '2.16.0',
    '2.15.0',
    '2.14.0',
    '2.13.0',
    '2.12.0',
    '2.11.1',
  ] as const,
  fullPath: 'opensearch.org' as const,
  aliases: [] as const,
}

export type OpensearchorgPackage = typeof opensearchorgPackage
