/**
 * **+pugixml.org -- $SHELL -i** - Light-weight, simple and fast XML parser for C++ with XPath support
 *
 * @domain `pugixml.org`
 * @version `1.15.0` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/pugixml-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +pugixml.org -- $SHELL -i`
 * @aliases `+pugixml.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pugixmlorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.pugixmlorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pugixml.org"
 * console.log(pkg.description) // "Light-weight, simple and fast XML parser for C+..."
 * console.log(pkg.versions[0]) // "1.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pugixml-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pugixmlorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'pugixml.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pugixml.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Light-weight, simple and fast XML parser for C++ with XPath support' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pugixml.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pugixml.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.15.0',
    '1.14.0',
    '1.13.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+pugixml.org -- $SHELL -i',
  ] as const,
  fullPath: 'pugixml.org' as const,
}

export type PugixmlorgSHELLiPackage = typeof pugixmlorgSHELLiPackage
