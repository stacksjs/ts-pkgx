/**
 * **libsigsegv** - Package from pantry: gnu.org/libsigsegv
 *
 * @domain `gnu.org/libsigsegv`
 *
 * @install `launchpad install gnu.org/libsigsegv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibsigsegv
 * console.log(pkg.name)        // "libsigsegv"
 * console.log(pkg.description) // "Package from pantry: gnu.org/libsigsegv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libsigsegv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibsigsegvPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsigsegv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libsigsegv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/libsigsegv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/libsigsegv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libsigsegv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/libsigsegv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libsigsegv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorglibsigsegvPackage = typeof gnuorglibsigsegvPackage
