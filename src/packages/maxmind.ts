/**
 * **maxmind** - pkgx package
 *
 * @domain `github.com/maxmind`
 *
 * @install `pkgx github.com/maxmind`
 * @name `maxmind`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.maxmind
 * // Or access via domain
 * const samePkg = pantry.githubcommaxmind
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "maxmind"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maxmind.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maxmindPackage = {
  /**
   * The display name of this package.
   */
  name: 'maxmind' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/maxmind' as const,
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
  installCommand: 'pkgx github.com/maxmind' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/maxmind' as const,
}

export type MaxmindPackage = typeof maxmindPackage
