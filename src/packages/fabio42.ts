/**
 * **fabio42** - pkgx package
 *
 * @domain `github.com/fabio42`
 *
 * @install `pkgx github.com/fabio42`
 * @name `fabio42`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fabio42
 * // Or access via domain
 * const samePkg = pantry.githubcomfabio42
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fabio42"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fabio42.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fabio42Package = {
  /**
   * The display name of this package.
   */
  name: 'fabio42' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fabio42' as const,
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
  installCommand: 'pkgx github.com/fabio42' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/fabio42' as const,
}

export type Fabio42Package = typeof fabio42Package
