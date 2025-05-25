export const temporalioPackage = {
  name: 'temporal' as const,
  domain: 'temporal.io' as const,
  description: 'Command-line interface for running Temporal Server and interacting with Workflows, Activities, Namespaces, and other parts of Temporal' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/temporal.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) temporal' as const,
  programs: [
    'temporal',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.3.0',
    '1.2.0',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.0',
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.0',
    '0.11.0',
    '0.10.7',
    '0.10.6',
    '0.10.5',
  ] as const,
  fullPath: 'temporal.io' as const,
  aliases: [] as const,
}

export type TemporalioPackage = typeof temporalioPackage
