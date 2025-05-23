export const agwanamegitcryptPackage = {
  name: 'git-crypt' as const,
  domain: 'agwa.name/git-crypt' as const,
  description: 'Enable transparent encryption/decryption of files in a git repo' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/agwa.name/git-crypt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) git-crypt' as const,
  programs: [
    'git-crypt',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [
    '0.7.0',
  ] as const,
  fullPath: 'agwa.name/git-crypt' as const,
  aliases: [
    'git-crypt',
  ] as const,
}

export type AgwanamegitcryptPackage = typeof agwanamegitcryptPackage
