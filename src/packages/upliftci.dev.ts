export const upliftcidevPackage = {
  name: 'uplift' as const,
  domain: 'upliftci.dev' as const,
  description: 'Semantic versioning the easy way. Powered by Conventional Commits. Built for use with CI.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/upliftci.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) uplift' as const,
  programs: [
    'uplift',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.25.0',
    '2.24.1',
    '2.24.0',
    '2.23.0',
    '2.22.0',
  ] as const,
  fullPath: 'upliftci.dev' as const,
  aliases: [] as const,
}

export type UpliftcidevPackage = typeof upliftcidevPackage
