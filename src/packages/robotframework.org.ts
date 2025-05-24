export const robotframeworkorgPackage = {
  name: 'robot' as const,
  domain: 'robotframework.org' as const,
  description: 'Generic automation framework for acceptance testing and RPA' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/robotframework.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) robot' as const,
  programs: [
    'robot',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [
    '7.2.2',
  ] as const,
  fullPath: 'robotframework.org' as const,
  aliases: [] as const,
}

export type RobotframeworkorgPackage = typeof robotframeworkorgPackage
