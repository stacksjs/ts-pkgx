/**
 * **gnu.org/gcc/libstdcxx** - pkgx package
 *
 * @domain `gnu.org/gcc/libstdcxx`
 * @version `15.1.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gnu.org/gcc/libstdcxx`
 * @dependencies `gnu.org/binutils`, `gnu.org/gmp>=4.2`, `gnu.org/mpfr>=2.4.0`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggcclibstdcxx
 * console.log(pkg.name)        // "gnu.org/gcc/libstdcxx"
 * console.log(pkg.versions[0]) // "15.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gcc/libstdcxx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggcclibstdcxxPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/gcc/libstdcxx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gcc/libstdcxx' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gcc/libstdcxx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/gcc/libstdcxx' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '15.1.0',
    '14.3.0',
    '14.2.0',
    '14.1.0',
    '13.3.0',
    '12.5.0',
    '12.4.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gcc/libstdcxx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/gcc/libstdcxx' as const,
}

export type GnuorggcclibstdcxxPackage = typeof gnuorggcclibstdcxxPackage
