/**
 * **dialog** - Package from pantry: invisible-island.net/dialog
 *
 * @domain `invisible-island.net/dialog`
 *
 * @install `launchpad install invisible-island.net/dialog`
 * @dependencies `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.invisibleislandnetdialog
 * console.log(pkg.name)        // "dialog"
 * console.log(pkg.description) // "Package from pantry: invisible-island.net/dialog"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/invisible-island-net/dialog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const invisibleislandnetdialogPackage = {
  /**
   * The display name of this package.
   */
  name: 'dialog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'invisible-island.net/dialog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: invisible-island.net/dialog' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install invisible-island.net/dialog' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +invisible-island.net/dialog -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install invisible-island.net/dialog' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/dialog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type InvisibleislandnetdialogPackage = typeof invisibleislandnetdialogPackage
