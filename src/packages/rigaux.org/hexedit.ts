/**
 * **hexedit** - Package from pantry: rigaux.org/hexedit
 *
 * @domain `rigaux.org/hexedit`
 *
 * @install `launchpad install rigaux.org/hexedit`
 * @dependencies `invisible-island.net/ncurses@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rigauxorghexedit
 * console.log(pkg.name)        // "hexedit"
 * console.log(pkg.description) // "Package from pantry: rigaux.org/hexedit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rigaux-org/hexedit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rigauxorghexeditPackage = {
  /**
   * The display name of this package.
   */
  name: 'hexedit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rigaux.org/hexedit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rigaux.org/hexedit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rigaux.org/hexedit' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses@6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rigaux.org/hexedit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RigauxorghexeditPackage = typeof rigauxorghexeditPackage
