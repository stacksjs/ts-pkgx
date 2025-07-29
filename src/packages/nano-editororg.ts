/**
 * **nano-editor.org** - Package from pantry: nano-editor.org
 *
 * @domain `nano-editor.org`
 *
 * @install `launchpad install nano-editor.org`
 * @dependencies `gnu.org/gettext`, `invisible-island.net/ncurses>=6.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nanoeditororg
 * console.log(pkg.name)        // "nano-editor.org"
 * console.log(pkg.description) // "Package from pantry: nano-editor.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nano-editor-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nanoeditororgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nano-editor.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nano-editor.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nano-editor.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nano-editor.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nano-editor.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nano-editor.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'invisible-island.net/ncurses>=6.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nano-editor.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NanoeditororgPackage = typeof nanoeditororgPackage
