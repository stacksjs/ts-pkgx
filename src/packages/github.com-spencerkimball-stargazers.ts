export const githubcomspencerkimballstargazersPackage = {
  name: 'stargazers' as const,
  domain: 'github.com/spencerkimball/stargazers' as const,
  description: 'Analyze GitHub stars' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/spencerkimball/stargazers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) stargazers' as const,
  programs: [
    'stargazers',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.0.0',
  ] as const,
  fullPath: 'github.com/spencerkimball/stargazers' as const,
  aliases: [
    'stargazers',
    'spencerkimball/stargazers',
  ] as const,
}

export type GithubcomspencerkimballstargazersPackage = typeof githubcomspencerkimballstargazersPackage
