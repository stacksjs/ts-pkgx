/**
 * **sctplab** - pkgx package
 *
 * @domain `github.com/sctplab`
 *
 * @install `pkgx github.com/sctplab`
 * @name `sctplab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sctplab
 * // Or access via domain
 * const samePkg = pantry.githubcomsctplab
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sctplab"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sctplab.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sctplabPackage = {
  /**
   * The display name of this package.
   */
  name: 'sctplab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sctplab' as const,
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
  installCommand: 'pkgx github.com/sctplab' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/sctplab' as const,
}

export type SctplabPackage = typeof sctplabPackage
