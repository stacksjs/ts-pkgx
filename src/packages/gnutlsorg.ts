/**
 * **gnutls.org** - Package from pantry: gnutls.org
 *
 * @domain `gnutls.org`
 *
 * @install `launchpad install gnutls.org`
 * @dependencies `freedesktop.org/p11-kit`, `gnu.org/libidn2`, `gnu.org/libunistring^1`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnutlsorg
 * console.log(pkg.name)        // "gnutls.org"
 * console.log(pkg.description) // "Package from pantry: gnutls.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnutls-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnutlsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnutls.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnutls.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnutls.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnutls.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnutls.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnutls.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/p11-kit',
    'gnu.org/libidn2',
    'gnu.org/libunistring^1',
    'gnu.org/libtasn1^4',
    'gnu.org/nettle',
    'gnu.org/gettext',
    'gnu.org/gmp',
    'unbound.net^1',
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnutls.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnutlsorgPackage = typeof gnutlsorgPackage
