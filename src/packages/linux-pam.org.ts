export const linuxpamorgPackage = {
  name: 'linux-pam.org' as const,
  domain: 'linux-pam.org' as const,
  description: 'Linux PAM (Pluggable Authentication Modules for Linux) project' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/linux-pam.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +linux-pam.org -- $SHELL -i' as const,
  programs: [
    'faillock',
    'mkhomedir_helper',
    'pam_namespace_helper',
    'pam_timestamp_check',
    'unix_chkpwd',
  ] as const,
  companions: [] as const,
  dependencies: [
    'github.com/thkukuk/libnsl',
    'sourceforge.net/libtirpc',
    'github.com/besser82/libxcrypt',
  ] as const,
  versions: [
    '1.7.0',
    '1.6.1',
    '1.6.0',
    '1.5.3',
  ] as const,
  fullPath: 'linux-pam.org' as const,
  aliases: [] as const,
}

export type LinuxpamorgPackage = typeof linuxpamorgPackage
