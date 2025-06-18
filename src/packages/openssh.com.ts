/**
 * **openssh.com** - pkgx package
 *
 * @domain `openssh.com`
 * @programs `scp`, `sftp`, `slogin`, `ssh`, `ssh-add`, ... (+4 more)
 * @version `10.0.0` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/openssh-com.md
 *
 * @install `sh <(curl https://pkgx.sh) +openssh.com -- $SHELL -i`
 * @dependencies `nlnetlabs.nl/ldns`, `developers.yubico.com/libfido2`, `openssl.org`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensshcom
 * console.log(pkg.name)        // "openssh.com"
 * console.log(pkg.programs)    // ["scp", "sftp", ...]
 * console.log(pkg.versions[0]) // "10.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openssh-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensshcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'openssh.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openssh.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from openssh.com' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openssh.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +openssh.com -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scp',
    'sftp',
    'slogin',
    'ssh',
    'ssh-add',
    'ssh-agent',
    'ssh-keygen',
    'ssh-keyscan',
    'sshd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nlnetlabs.nl/ldns',
    'developers.yubico.com/libfido2',
    'openssl.org',
    'kerberos.org',
    'thrysoee.dk/editline',
    'github.com/besser82/libxcrypt',
    'zlib.net',
    'linuxlinux-pam.org',
    'linux-pam.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '10.0.0',
    '9.9.0',
    '9.8.0',
    '9.7.0',
    '9.6.0',
    '9.5.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'openssh.com' as const,
}

export type OpensshcomPackage = typeof opensshcomPackage
