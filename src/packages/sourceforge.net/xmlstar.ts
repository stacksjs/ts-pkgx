/**
 * **XMLStarlet** - XML command-line utilities
 *
 * @domain `sourceforge.net/xmlstar`
 * @programs `xml`, `xmlstarlet`
 * @version `1.6.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +sourceforge.net/xmlstar -- $SHELL -i`
 * @aliases `XMLStarlet`
 * @dependencies `gnome.org/libxslt^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.XMLStarlet
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetxmlstar
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xmlstar"
 * console.log(pkg.description) // "XML command-line utilities"
 * console.log(pkg.programs)    // ["xml", "xmlstarlet"]
 * console.log(pkg.versions[0]) // "1.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/xmlstar.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xMLStarletPackage = {
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
  description: 'XML command-line utilities' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/xmlstar/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +sourceforge.net/xmlstar -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xml',
    'xmlstarlet',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxslt^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'XMLStarlet',
  ] as const,
}

export type XMLStarletPackage = typeof xMLStarletPackage
