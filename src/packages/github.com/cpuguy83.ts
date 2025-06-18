/**
 * **cpuguy83** - pkgx package
 *
 * @domain `github.com/cpuguy83`
 *
 * @install `pkgx github.com/cpuguy83`
 * @name `cpuguy83`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cpuguy83
 * // Or access via domain
 * const samePkg = pantry.githubcomcpuguy83
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cpuguy83"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cpuguy83.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cpuguy83Package = {
  /**
   * The display name of this package.
   */
  name: 'cpuguy83' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cpuguy83' as const,
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
  installCommand: 'pkgx github.com/cpuguy83' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/cpuguy83' as const,
}

export type Cpuguy83Package = typeof cpuguy83Package
