/**
 * **abanteai** - pkgx package
 *
 * @domain `github.com/abanteai`
 *
 * @install `pkgx github.com/abanteai`
 * @name `abanteai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.abanteai
 * // Or access via domain
 * const samePkg = pantry.githubcomabanteai
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "abanteai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/abanteai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const abanteaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'abanteai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/abanteai' as const,
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
  installCommand: 'pkgx github.com/abanteai' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/abanteai' as const,
}

export type AbanteaiPackage = typeof abanteaiPackage
