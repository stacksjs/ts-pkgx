/**
 * **guile** - Package from pantry: gnu.org/guile
 *
 * @domain `gnu.org/guile`
 *
 * @install `launchpad install gnu.org/guile`
 * @dependencies `hboehm.info/gc^8`, `gnu.org/gmp^6`, `gnu.org/libtool^2`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgguile
 * console.log(pkg.name)        // "guile"
 * console.log(pkg.description) // "Package from pantry: gnu.org/guile"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/guile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgguilePackage = {
  /**
   * The display name of this package.
   */
  name: 'guile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/guile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/guile' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/guile' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/guile -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/guile' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hboehm.info/gc^8',
    'gnu.org/gmp^6',
    'gnu.org/libtool^2',
    'gnu.org/libunistring^1',
    'freedesktop.org/pkg-config^0.29 # guile-config is a wrapper around pkg-config.',
    'gnu.org/readline^8',
    'gnu.org/gperf^3',
    'sourceware.org/libffi^3',
    'github.com/besser82/libxcrypt^4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/guile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgguilePackage = typeof gnuorgguilePackage
