/**
 * **bison** - Package from pantry: gnu.org/bison
 *
 * @domain `gnu.org/bison`
 *
 * @install `launchpad install gnu.org/bison`
 * @dependencies `gnu.org/m4@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgbison
 * console.log(pkg.name)        // "bison"
 * console.log(pkg.description) // "Package from pantry: gnu.org/bison"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bison.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgbisonPackage = {
  /**
   * The display name of this package.
   */
  name: 'bison' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/bison' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/bison' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/bison' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/bison -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/bison' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/m4@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bison/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgbisonPackage = typeof gnuorgbisonPackage
