/**
 * **nomic-ai** - pkgx package
 *
 * @domain `github.com/nomic-ai`
 *
 * @install `pkgx github.com/nomic-ai`
 * @name `nomic-ai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nomicai
 * // Or access via domain
 * const samePkg = pantry.githubcomnomicai
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nomic-ai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nomic-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nomicaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'nomic-ai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nomic-ai' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/nomic-ai' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/nomic-ai' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/nomic-ai' as const,
}

export type NomicaiPackage = typeof nomicaiPackage
