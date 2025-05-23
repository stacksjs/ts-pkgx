export const kagglecomPackage = {
  name: 'kaggle' as const,
  domain: 'kaggle.com' as const,
  description: 'Official Kaggle API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kaggle.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) kaggle' as const,
  programs: [
    'kaggle',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [
    '1.7.4.5',
    '1.7.4.2',
    '1.6.3',
    '1.6.1',
    '1.5.16',
  ] as const,
  fullPath: 'kaggle.com' as const,
}

export type KagglecomPackage = typeof kagglecomPackage
