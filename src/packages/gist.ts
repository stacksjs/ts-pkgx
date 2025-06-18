/**
 * **gist** - Potentially the best command line gister.
 *
 * @domain `rubygems.org/gist`
 * @programs `gist`
 * @version `6.0.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/rubygems-org/gist.md
 *
 * @install `sh <(curl https://pkgx.sh) gist`
 * @name `gist`
 * @dependencies `ruby-lang.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gist
 * // Or access via domain
 * const samePkg = pantry.rubygemsorggist
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gist"
 * console.log(pkg.description) // "Potentially the best command line gister."
 * console.log(pkg.programs)    // ["gist"]
 * console.log(pkg.versions[0]) // "6.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rubygems-org/gist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gistPackage = {
  /**
   * The display name of this package.
   */
  name: 'gist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rubygems.org/gist' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Potentially the best command line gister.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rubygems.org/gist/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gist' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gist',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'rubygems.org/gist' as const,
}

export type GistPackage = typeof gistPackage
