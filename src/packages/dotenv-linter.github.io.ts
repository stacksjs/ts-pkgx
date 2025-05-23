export const dotenvlintergithubioPackage = {
  name: 'dotenv-linter' as const,
  domain: 'dotenv-linter.github.io' as const,
  description: '⚡️Lightning-fast linter for .env files. Written in Rust 🦀' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dotenv-linter.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) dotenv-linter' as const,
  programs: [
    'dotenv-linter',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '3.3.0',
  ] as const,
  fullPath: 'dotenv-linter.github.io' as const,
}

export type DotenvlintergithubioPackage = typeof dotenvlintergithubioPackage
