/**
 * **systemd.io** - Package from pantry: systemd.io
 *
 * @domain `systemd.io`
 *
 * @install `launchpad install systemd.io`
 * @dependencies `libexpat.github.io`, `google.com/fullycapable`, `lz4.org`, ... (+26 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.systemdio
 * console.log(pkg.name)        // "systemd.io"
 * console.log(pkg.description) // "Package from pantry: systemd.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/systemd-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const systemdioPackage = {
  /**
   * The display name of this package.
   */
  name: 'systemd.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'systemd.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: systemd.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install systemd.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
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
    'gnu.org/coreutils',
    'docbook.org',
    'gnu.org/gettext',
    'gnu.org/gperf',
    'github.com/mattrobenolt/jinja2-cli',
    'gnupg.org/libgpg-error',
    'gnu.org/libtool',
    'gnome.org/libxslt',
    'gnome.org/libxml2~2.13 # since 257.5, 2.14 changed the API version',
    'gnu.org/m4',
    'mesonbuild.com',
    'ninja-build.org',
    'freedesktop.org/pkg-config',
    'python.org>=3<3.12',
    'rsync.samba.org',
    'kernel.org/linux-headers>=5.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/systemd.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SystemdioPackage = typeof systemdioPackage
