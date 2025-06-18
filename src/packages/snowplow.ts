/**
 * **snowplow** - pkgx package
 *
 * @domain `github.com/snowplow`
 *
 * @install `pkgx github.com/snowplow`
 * @name `snowplow`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.snowplow
 * // Or access via domain
 * const samePkg = pantry.githubcomsnowplow
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "snowplow"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/snowplow.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const snowplowPackage = {
  /**
   * The display name of this package.
   */
  name: 'snowplow' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/snowplow' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/snowplow' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/snowplow' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/snowplow' as const,
}

export type SnowplowPackage = typeof snowplowPackage
