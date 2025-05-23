export const openapigeneratortechPackage = {
  name: 'openapi-generator' as const,
  domain: 'openapi-generator.tech' as const,
  description: 'OpenAPI Generator allows generation of API client libraries (SDK generation), server stubs, documentation and configuration automatically given an OpenAPI Spec (v2, v3)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openapi-generator.tech/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) openapi-generator' as const,
  programs: [
    'openapi-generator',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openjdk.org^21',
  ] as const,
  versions: [
    '7.13.0',
    '7.12.0',
    '7.11.0',
    '7.10.0',
    '7.9.0',
    '7.8.0',
    '7.7.0',
    '7.6.0',
    '7.5.0',
    '7.4.0',
    '7.3.0',
    '7.2.0',
  ] as const,
  fullPath: 'openapi-generator.tech' as const,
}

export type OpenapigeneratortechPackage = typeof openapigeneratortechPackage
