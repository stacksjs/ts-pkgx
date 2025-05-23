export const systemdioPackage = {
  name: 'systemd.io' as const,
  domain: 'systemd.io' as const,
  description: 'The systemd System and Service Manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/systemd.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +systemd.io -- $SHELL -i' as const,
  programs: [
    'busctl',
    'coredumpctl',
    'hostnamectl',
    'journalctl',
    'kernel-install',
    'localectl',
    'loginctl',
    'machinectl',
    'networkctl',
    'oomctl',
    'portablectl',
    'resolvectl',
    'systemctl',
    'systemd-ac-power',
    'systemd-analyze',
    'systemd-ask-password',
    'systemd-cat',
    'systemd-cgls',
    'systemd-cgtop',
    'systemd-confext',
    'systemd-creds',
    'systemd-delta',
    'systemd-detect-virt',
    'systemd-dissect',
    'systemd-escape',
    'systemd-firstboot',
    'systemd-id128',
    'systemd-inhibit',
    'systemd-machine-id-setup',
    'systemd-mount',
    'systemd-notify',
    'systemd-nspawn',
    'systemd-path',
    'systemd-repart',
    'systemd-resolve',
    'systemd-run',
    'systemd-socket-activate',
    'systemd-stdio-bridge',
    'systemd-sysext',
    'systemd-sysusers',
    'systemd-tmpfiles',
    'systemd-tty-ask-password-agent',
    'systemd-umount',
    'timedatectl',
    'udevadm',
    'userdbctl',
    'halt',
    'init',
    'mount.ddi',
    'poweroff',
    'reboot',
    'resolvconf',
    'runlevel',
    'shutdown',
    'telinit',
  ] as const,
  companions: [] as const,
  dependencies: [
    'libexpat.github.io',
    'google.com/fullycapable',
    'lz4.org',
    'openssl.org^1.1',
    'github.com/util-linux/util-linux',
    'tukaani.org/xz',
    'facebook.com/zstd',
    'github.com/besser82/libxcrypt',
    'curl.se',
    'gnu.org/libidn2',
    'gnutls.org',
    'sourceware.org/bzip2',
    'pcre.org/v2',
  ] as const,
  versions: [
    '257.5.0',
    '257.4.0',
    '257.3.0',
    '257.2.0',
    '257.1.0',
    '257.0.0',
    '256.13.0',
    '256.12.0',
    '256.11.0',
    '256.10.0',
    '256.9.0',
    '256.8.0',
    '256.7.0',
    '256.6.0',
    '256.5.0',
    '256.4.0',
    '256.3.0',
    '256.2.0',
    '256.1.0',
    '256.0.0',
    '255.0.0',
    '254.0.0',
  ] as const,
  fullPath: 'systemd.io' as const,
}

export type SystemdioPackage = typeof systemdioPackage
