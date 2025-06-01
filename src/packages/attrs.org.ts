/**
 * **+attrs.org -- $SHELL -i** - Python Classes Without Boilerplate
 *
 * @domain `attrs.org`
 * @version `25.3.0` (7 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/attrs-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +attrs.org -- $SHELL -i`
 * @aliases `+attrs.org -- $SHELL -i`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.attrsorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.attrsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "attrs.org"
 * console.log(pkg.description) // "Python Classes Without Boilerplate"
 * console.log(pkg.versions[0]) // "25.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/attrs-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const attrsorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'attrs.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'attrs.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python Classes Without Boilerplate' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/attrs.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +attrs.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.3.0',
    '25.2.0',
    '25.1.0',
    '24.3.0',
    '24.2.0',
    '24.1.0',
    '23.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+attrs.org -- $SHELL -i',
  ] as const,
  fullPath: 'attrs.org' as const,
}

export type AttrsorgSHELLiPackage = typeof attrsorgSHELLiPackage
