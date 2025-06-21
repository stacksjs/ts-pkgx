/**
 * **xmlstar** - Package from pantry: sourceforge.net/xmlstar
 *
 * @domain `sourceforge.net/xmlstar`
 *
 * @install `launchpad install sourceforge.net/xmlstar`
 * @dependencies `gnome.org/libxslt^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetxmlstar
 * console.log(pkg.name)        // "xmlstar"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/xmlstar"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/xmlstar.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetxmlstarPackage = {
  /**
   * The display name of this package.
   */
  name: 'xmlstar' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/xmlstar' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/xmlstar' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/xmlstar' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxslt^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/xmlstar/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourceforgenetxmlstarPackage = typeof sourceforgenetxmlstarPackage
