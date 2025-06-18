/**
 * **openssh.com** - Package from pantry: openssh.com
 *
 * @domain `openssh.com`
 *
 * @install `launchpad install openssh.com`
 * @dependencies `nlnetlabs.nl/ldns`, `developers.yubico.com/libfido2`, `openssl.org`, ... (+10 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensshcom
 * console.log(pkg.name)        // "openssh.com"
 * console.log(pkg.description) // "Package from pantry: openssh.com"
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
  description: 'Package from pantry: openssh.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openssh.com' as const,
  programs: [] as const,
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
    'linux-pam.org',
    'freedesktop.org/pkg-config',
    'curl.se',
    'gnu.org/patch',
    'gnu.org/gcc',
    'gnu.org/make',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openssh.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpensshcomPackage = typeof opensshcomPackage
