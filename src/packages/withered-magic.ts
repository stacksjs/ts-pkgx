/**
 * **withered-magic** - pkgx package
 *
 * @domain `github.com/withered-magic`
 *
 * @install `pkgx github.com/withered-magic`
 * @name `withered-magic`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.witheredmagic
 * // Or access via domain
 * const samePkg = pantry.githubcomwitheredmagic
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "withered-magic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/withered-magic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const witheredmagicPackage = {
  /**
   * The display name of this package.
   */
  name: 'withered-magic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/withered-magic' as const,
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
  installCommand: 'pkgx github.com/withered-magic' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/withered-magic' as const,
}

export type WitheredmagicPackage = typeof witheredmagicPackage
