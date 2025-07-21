/**
 * **source-highlight** - Package from pantry: gnu.org/source-highlight
 *
 * @domain `gnu.org/source-highlight`
 *
 * @install `launchpad install gnu.org/source-highlight`
 * @dependencies `boost.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgsourcehighlight
 * console.log(pkg.name)        // "source-highlight"
 * console.log(pkg.description) // "Package from pantry: gnu.org/source-highlight"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/source-highlight.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgsourcehighlightPackage = {
  /**
   * The display name of this package.
   */
  name: 'source-highlight' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/source-highlight' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/source-highlight' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/source-highlight' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/source-highlight -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/source-highlight' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'boost.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/source-highlight/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgsourcehighlightPackage = typeof gnuorgsourcehighlightPackage
