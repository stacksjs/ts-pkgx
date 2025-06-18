/**
 * **tinyxml2** - TinyXML2 is a simple, small, efficient, C++ XML parser that can be easily integrated into other programs.
 *
 * @domain `leethomason.github.io/tinyxml2`
 * @version `11.0.0` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/leethomason-github-io/tinyxml2.md
 *
 * @install `sh <(curl https://pkgx.sh) +leethomason.github.io/tinyxml2 -- $SHELL -i`
 * @aliases `tinyxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tinyxml2
 * // Or access via domain
 * const samePkg = pantry.leethomasongithubiotinyxml2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "leethomason.github.io/tinyxml2"
 * console.log(pkg.description) // "TinyXML2 is a simple, small, efficient, C++ XML..."
 * console.log(pkg.versions[0]) // "11.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leethomason-github-io/tinyxml2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tinyxml2Package = {
  /**
   * The display name of this package.
   */
  name: 'leethomason.github.io/tinyxml2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leethomason.github.io/tinyxml2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'TinyXML2 is a simple, small, efficient, C++ XML parser that can be easily integrated into other programs.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leethomason.github.io/tinyxml2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +leethomason.github.io/tinyxml2 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '11.0.0',
    '10.1.0',
    '10.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tinyxml2',
  ] as const,
  fullPath: 'leethomason.github.io/tinyxml2' as const,
}

export type Tinyxml2Package = typeof tinyxml2Package
