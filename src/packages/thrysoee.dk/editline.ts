/**
 * **editline** - Package from pantry: thrysoee.dk/editline
 *
 * @domain `thrysoee.dk/editline`
 *
 * @install `launchpad install thrysoee.dk/editline`
 * @dependencies `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.thrysoeedkeditline
 * console.log(pkg.name)        // "editline"
 * console.log(pkg.description) // "Package from pantry: thrysoee.dk/editline"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thrysoee-dk/editline.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thrysoeedkeditlinePackage = {
  /**
   * The display name of this package.
   */
  name: 'editline' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thrysoee.dk/editline' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: thrysoee.dk/editline' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install thrysoee.dk/editline' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +thrysoee.dk/editline -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install thrysoee.dk/editline' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/thrysoee.dk/editline/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ThrysoeedkeditlinePackage = typeof thrysoeedkeditlinePackage
