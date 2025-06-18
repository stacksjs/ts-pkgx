/**
 * **ggerganov** - pkgx package
 *
 * @domain `github.com/ggerganov`
 *
 * @install `pkgx github.com/ggerganov`
 * @name `ggerganov`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ggerganov
 * // Or access via domain
 * const samePkg = pantry.githubcomggerganov
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ggerganov"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ggerganov.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ggerganovPackage = {
  /**
   * The display name of this package.
   */
  name: 'ggerganov' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ggerganov' as const,
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
  installCommand: 'pkgx github.com/ggerganov' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ggerganov' as const,
}

export type GgerganovPackage = typeof ggerganovPackage
