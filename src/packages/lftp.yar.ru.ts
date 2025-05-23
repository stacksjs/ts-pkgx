export const lftpyarruPackage = {
  name: 'lftp' as const,
  domain: 'lftp.yar.ru' as const,
  description: 'sophisticated command line file transfer program (ftp, http, sftp, fish, torrent)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lftp.yar.ru/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +lftp.yar.ru -- $SHELL -i' as const,
  programs: [
    'lftp',
    'lftpget',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnu.org/libidn2',
    'gnu.org/gettext',
    'gnu.org/readline',
    'openssl.org^1.1',
    'zlib.net',
    'invisible-island.net/ncurses',
    'libexpat.github.io',
    'linuxgnu.org/gcc/libstdcxx@14',
    'gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [
    '4.9.3',
    '4.9.2',
    '4.9.1',
  ] as const,
  fullPath: 'lftp.yar.ru' as const,
  aliases: [] as const,
}

export type LftpyarruPackage = typeof lftpyarruPackage
