export const deepwisdomaiPackage = {
  name: 'MetaGPT' as const,
  domain: 'deepwisdom.ai' as const,
  description: '🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/deepwisdom.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) metagpt' as const,
  programs: [
    'metagpt',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pkgx.sh^1',
    'git-scm.org^2',
  ] as const,
  versions: [
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.7',
    '0.7.6',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.6',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.0',
    '0.5.2',
  ] as const,
  fullPath: 'deepwisdom.ai' as const,
  aliases: [
    'metagpt',
  ] as const,
}

export type DeepwisdomaiPackage = typeof deepwisdomaiPackage
