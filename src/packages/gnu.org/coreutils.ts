/**
 * **coreutils** - Package from pantry: gnu.org/coreutils
 *
 * @domain `gnu.org/coreutils`
 *
 * @install `launchpad install gnu.org/coreutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgcoreutils
 * console.log(pkg.name)        // "coreutils"
 * console.log(pkg.description) // "Package from pantry: gnu.org/coreutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/coreutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgcoreutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'coreutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/coreutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/coreutils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/coreutils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/coreutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/coreutils' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/coreutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgcoreutilsPackage = typeof gnuorgcoreutilsPackage
