/**
 * **libevent.org** - Package from pantry: libevent.org
 *
 * @domain `libevent.org`
 *
 * @install `launchpad install libevent.org`
 * @dependencies `openssl.org^1.1`, `gnu.org/libtool^2`, `gnu.org/automake^1`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libeventorg
 * console.log(pkg.name)        // "libevent.org"
 * console.log(pkg.description) // "Package from pantry: libevent.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libevent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libeventorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libevent.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libevent.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libevent.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libevent.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'gnu.org/libtool^2',
    'gnu.org/automake^1',
    'gnu.org/autoconf^2',
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libevent.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibeventorgPackage = typeof libeventorgPackage
