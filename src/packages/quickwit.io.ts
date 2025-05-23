export const quickwitioPackage = {
  name: 'quickwit' as const,
  domain: 'quickwit.io' as const,
  description: 'Cloud-native search engine for observability. An open-source alternative to Datadog, Elasticsearch, Loki, and Tempo.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/quickwit.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) quickwit' as const,
  programs: [
    'quickwit',
  ] as const,
  companions: [] as const,
  dependencies: [
    'protobuf.dev^25',
  ] as const,
  versions: [
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.1',
    '0.7.0',
    '0.6.5',
    '0.6.4',
  ] as const,
  fullPath: 'quickwit.io' as const,
}

export type QuickwitioPackage = typeof quickwitioPackage
