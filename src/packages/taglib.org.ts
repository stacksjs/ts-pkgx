/**
 * **taglib-config** - TagLib Audio Meta-Data Library
 *
 * @domain `taglib.org`
 * @programs `taglib-config`
 * @version `2.1.0` (5 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/taglib-org.md
 *
 * @install `sh <(curl https://pkgx.sh) taglib-config`
 * @name `taglib-config`
 * @dependencies `zlib.net^1`, `github.com/nemtrif/utfcpp^4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.taglibconfig
 * // Or access via domain
 * const samePkg = pantry.tagliborg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "taglib-config"
 * console.log(pkg.description) // "TagLib Audio Meta-Data Library"
 * console.log(pkg.programs)    // ["taglib-config"]
 * console.log(pkg.versions[0]) // "2.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taglib-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taglibconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'taglib-config' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taglib.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'TagLib Audio Meta-Data Library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taglib.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) taglib-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'taglib-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'github.com/nemtrif/utfcpp^4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.0',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.13.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'taglib.org' as const,
}

export type TaglibconfigPackage = typeof taglibconfigPackage
