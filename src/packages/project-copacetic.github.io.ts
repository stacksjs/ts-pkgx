export const projectcopaceticgithubioPackage = {
  name: 'copa' as const,
  domain: 'project-copacetic.github.io' as const,
  description: 'Tool to directly patch container images given the vulnerability scanning results' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/project-copacetic.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) copa' as const,
  programs: [
    'copa',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.0',
    '0.6.2',
  ] as const,
  fullPath: 'project-copacetic.github.io' as const,
  aliases: [
    'copa',
  ] as const,
}

export type ProjectcopaceticgithubioPackage = typeof projectcopaceticgithubioPackage
