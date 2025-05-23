export const gradleorgPackage = {
  name: 'gradle' as const,
  domain: 'gradle.org' as const,
  description: 'Open-source build automation tool based on the Groovy and Kotlin DSL' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gradle.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) gradle' as const,
  programs: [
    'gradle',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [
    '8.14.1',
    '8.14.0',
    '8.13.0',
    '8.12.1',
    '8.12.0',
    '8.11.1',
    '8.11.0',
    '8.10.2',
    '8.10.1',
    '8.10.0',
    '8.9.0',
    '8.8.0',
    '8.7.0',
    '8.6.0',
    '8.5.0',
    '8.2.1',
  ] as const,
  fullPath: 'gradle.org' as const,
}

export type GradleorgPackage = typeof gradleorgPackage
