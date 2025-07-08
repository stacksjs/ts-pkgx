/**
 * **m4** - Package from pantry: gnu.org/m4
 *
 * @domain `gnu.org/m4`
 *
 * @install `launchpad install gnu.org/m4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgm4
 * console.log(pkg.name)        // "m4"
 * console.log(pkg.description) // "Package from pantry: gnu.org/m4"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/m4.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgm4Package = {
  /**
   * The display name of this package.
   */
  name: 'm4' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/m4' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/m4' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/m4' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/m4 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/m4' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/m4/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gnuorgm4Package = typeof gnuorgm4Package
