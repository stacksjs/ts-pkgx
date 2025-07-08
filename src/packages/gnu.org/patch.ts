/**
 * **patch** - Package from pantry: gnu.org/patch
 *
 * @domain `gnu.org/patch`
 *
 * @install `launchpad install gnu.org/patch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgpatch
 * console.log(pkg.name)        // "patch"
 * console.log(pkg.description) // "Package from pantry: gnu.org/patch"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/patch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgpatchPackage = {
  /**
   * The display name of this package.
   */
  name: 'patch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/patch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/patch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/patch' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/patch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/patch' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/patch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgpatchPackage = typeof gnuorgpatchPackage
