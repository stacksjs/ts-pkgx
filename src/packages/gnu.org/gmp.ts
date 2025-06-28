/**
 * **gmp** - Package from pantry: gnu.org/gmp
 *
 * @domain `gnu.org/gmp`
 *
 * @install `launchpad install gnu.org/gmp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggmp
 * console.log(pkg.name)        // "gmp"
 * console.log(pkg.description) // "Package from pantry: gnu.org/gmp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gmp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggmpPackage = {
  /**
   * The display name of this package.
   */
  name: 'gmp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gmp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/gmp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/gmp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gmp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/gmp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gmp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorggmpPackage = typeof gnuorggmpPackage
