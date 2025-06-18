/**
 * **README.EXT** - pkgx package
 *
 * @domain `ruby-lang.org/README.EXT`
 *
 * @install `pkgx ruby-lang.org/README.EXT`
 * @name `README.EXT`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.READMEEXT
 * // Or access via domain
 * const samePkg = pantry.rubylangorgreadmeext
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "README.EXT"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ruby-lang-org/README-EXT.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rEADMEEXTPackage = {
  /**
   * The display name of this package.
   */
  name: 'README.EXT' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ruby-lang.org/README.EXT' as const,
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
  installCommand: 'pkgx ruby-lang.org/README.EXT' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'ruby-lang.org/README.EXT' as const,
}

export type READMEEXTPackage = typeof rEADMEEXTPackage
