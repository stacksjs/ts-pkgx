/**
 * **README.EXT.ja** - pkgx package
 *
 * @domain `ruby-lang.org/README.EXT.ja`
 *
 * @install `pkgx ruby-lang.org/README.EXT.ja`
 * @name `README.EXT.ja`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.READMEEXTja
 * // Or access via domain
 * const samePkg = pantry.rubylangorgreadmeextja
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "README.EXT.ja"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ruby-lang-org/README-EXT-ja.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rEADMEEXTjaPackage = {
  /**
   * The display name of this package.
   */
  name: 'README.EXT.ja' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ruby-lang.org/README.EXT.ja' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ruby-lang.org/README.EXT.ja' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'ruby-lang.org/README.EXT.ja' as const,
}

export type READMEEXTjaPackage = typeof rEADMEEXTjaPackage
