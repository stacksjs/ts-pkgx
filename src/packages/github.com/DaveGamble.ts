/**
 * **DaveGamble** - pkgx package
 *
 * @domain `github.com/DaveGamble`
 *
 * @install `pkgx github.com/DaveGamble`
 * @name `DaveGamble`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.DaveGamble
 * // Or access via domain
 * const samePkg = pantry.githubcomdavegamble
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "DaveGamble"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DaveGamble.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daveGamblePackage = {
  /**
   * The display name of this package.
   */
  name: 'DaveGamble' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DaveGamble' as const,
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
  installCommand: 'pkgx github.com/DaveGamble' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/DaveGamble' as const,
}

export type DaveGamblePackage = typeof daveGamblePackage
