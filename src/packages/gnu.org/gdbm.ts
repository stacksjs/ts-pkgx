/**
 * **gdbm** - Package from pantry: gnu.org/gdbm
 *
 * @domain `gnu.org/gdbm`
 *
 * @install `launchpad install gnu.org/gdbm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggdbm
 * console.log(pkg.name)        // "gdbm"
 * console.log(pkg.description) // "Package from pantry: gnu.org/gdbm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gdbm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggdbmPackage = {
  /**
   * The display name of this package.
   */
  name: 'gdbm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gdbm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/gdbm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/gdbm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gdbm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/gdbm' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gdbm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorggdbmPackage = typeof gnuorggdbmPackage
