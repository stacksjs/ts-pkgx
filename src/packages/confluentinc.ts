/**
 * **confluentinc** - pkgx package
 *
 * @domain `github.com/confluentinc`
 *
 * @install `pkgx github.com/confluentinc`
 * @name `confluentinc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.confluentinc
 * // Or access via domain
 * const samePkg = pantry.githubcomconfluentinc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "confluentinc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/confluentinc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const confluentincPackage = {
  /**
   * The display name of this package.
   */
  name: 'confluentinc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/confluentinc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/confluentinc' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/confluentinc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/confluentinc' as const,
}

export type ConfluentincPackage = typeof confluentincPackage
