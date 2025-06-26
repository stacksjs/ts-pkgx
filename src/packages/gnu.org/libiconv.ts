/**
 * **libiconv** - Package from pantry: gnu.org/libiconv
 *
 * @domain `gnu.org/libiconv`
 *
 * @install `launchpad install gnu.org/libiconv`
 * @dependencies `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibiconv
 * console.log(pkg.name)        // "libiconv"
 * console.log(pkg.description) // "Package from pantry: gnu.org/libiconv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libiconv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibiconvPackage = {
  /**
   * The display name of this package.
   */
  name: 'libiconv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libiconv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/libiconv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/libiconv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libiconv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/libiconv' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libiconv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorglibiconvPackage = typeof gnuorglibiconvPackage
