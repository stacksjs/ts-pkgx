/**
 * **jameswoolfenden** - pkgx package
 *
 * @domain `github.com/jameswoolfenden`
 *
 * @install `pkgx github.com/jameswoolfenden`
 * @name `jameswoolfenden`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jameswoolfenden
 * // Or access via domain
 * const samePkg = pantry.githubcomjameswoolfenden
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jameswoolfenden"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jameswoolfenden.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jameswoolfendenPackage = {
  /**
   * The display name of this package.
   */
  name: 'jameswoolfenden' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jameswoolfenden' as const,
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
  installCommand: 'pkgx github.com/jameswoolfenden' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jameswoolfenden' as const,
}

export type JameswoolfendenPackage = typeof jameswoolfendenPackage
