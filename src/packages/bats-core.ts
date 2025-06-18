/**
 * **bats-core** - pkgx package
 *
 * @domain `github.com/bats-core`
 *
 * @install `pkgx github.com/bats-core`
 * @name `bats-core`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.batscore
 * // Or access via domain
 * const samePkg = pantry.githubcombatscore
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bats-core"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/bats-core.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const batscorePackage = {
  /**
   * The display name of this package.
   */
  name: 'bats-core' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/bats-core' as const,
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
  installCommand: 'pkgx github.com/bats-core' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/bats-core' as const,
}

export type BatscorePackage = typeof batscorePackage
