/**
 * **ChrisJohnsen** - pkgx package
 *
 * @domain `github.com/ChrisJohnsen`
 *
 * @install `pkgx github.com/ChrisJohnsen`
 * @name `ChrisJohnsen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ChrisJohnsen
 * // Or access via domain
 * const samePkg = pantry.githubcomchrisjohnsen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ChrisJohnsen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ChrisJohnsen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chrisJohnsenPackage = {
  /**
   * The display name of this package.
   */
  name: 'ChrisJohnsen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ChrisJohnsen' as const,
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
  installCommand: 'pkgx github.com/ChrisJohnsen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ChrisJohnsen' as const,
}

export type ChrisJohnsenPackage = typeof chrisJohnsenPackage
