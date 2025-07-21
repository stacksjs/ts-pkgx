/**
 * **libstdcxx** - Package from pantry: gnu.org/gcc/libstdcxx
 *
 * @domain `gnu.org/gcc/libstdcxx`
 *
 * @install `launchpad install gnu.org/gcc/libstdcxx`
 * @dependencies `gnu.org/binutils`, `gnu.org/gmp>=4.2`, `gnu.org/mpfr>=2.4.0`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggcclibstdcxx
 * console.log(pkg.name)        // "libstdcxx"
 * console.log(pkg.description) // "Package from pantry: gnu.org/gcc/libstdcxx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gcc/libstdcxx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggcclibstdcxxPackage = {
  /**
   * The display name of this package.
   */
  name: 'libstdcxx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gcc/libstdcxx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/gcc/libstdcxx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/gcc/libstdcxx' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gcc/libstdcxx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/gcc/libstdcxx' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/binutils',
    'gnu.org/gmp>=4.2',
    'gnu.org/mpfr>=2.4.0',
    'gnu.org/mpc>=0.8.0',
    'zlib.net^1.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gcc/libstdcxx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorggcclibstdcxxPackage = typeof gnuorggcclibstdcxxPackage
