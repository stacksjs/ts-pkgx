/**
 * **gnu.org/patch** - pkgx package
 *
 * @domain `gnu.org/patch`
 * @version `2.8.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gnu.org/patch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgpatch
 * console.log(pkg.name)        // "gnu.org/patch"
 * console.log(pkg.versions[0]) // "2.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/patch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgpatchPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/patch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/patch' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/patch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/patch' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.8.0',
    '2.7.6',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/patch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/patch' as const,
}

export type GnuorgpatchPackage = typeof gnuorgpatchPackage
