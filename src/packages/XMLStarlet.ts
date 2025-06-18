/**
 * **XMLStarlet** - XML command-line utilities
 *
 * @domain `sf.net/xmlstar`
 * @programs `xml`, `xmlstarlet`
 * @version `1.6.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/sf-net/xmlstar.md
 *
 * @install `sh <(curl https://pkgx.sh) +sourceforge.net/xmlstar -- $SHELL -i`
 * @name `XMLStarlet`
 * @aliases `xmlstarlet`, `sourceforge.net/xmlstar`, `xmlstar`
 * @dependencies `gnome.org/libxslt^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.XMLStarlet
 * // Or access via domain
 * const samePkg = pantry.sfnetxmlstar
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "XMLStarlet"
 * console.log(pkg.description) // "XML command-line utilities"
 * console.log(pkg.programs)    // ["xml", "xmlstarlet"]
 * console.log(pkg.versions[0]) // "1.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sf-net/xmlstar.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xMLStarletPackage = {
  /**
   * The display name of this package.
   */
  name: 'XMLStarlet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sf.net/xmlstar' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'XML command-line utilities' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/xmlstar/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/xmlstar -- $SHELL -i' as const,
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
    'xmlstarlet',
    'sourceforge.net/xmlstar',
    'xmlstar',
  ] as const,
  fullPath: 'sourceforge.net/xmlstar' as const,
}

export type XMLStarletPackage = typeof xMLStarletPackage
