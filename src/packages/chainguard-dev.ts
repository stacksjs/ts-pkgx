/**
 * **chainguard-dev** - pkgx package
 *
 * @domain `github.com/chainguard-dev`
 *
 * @install `pkgx github.com/chainguard-dev`
 * @name `chainguard-dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.chainguarddev
 * // Or access via domain
 * const samePkg = pantry.githubcomchainguarddev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chainguard-dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/chainguard-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chainguarddevPackage = {
  /**
   * The display name of this package.
   */
  name: 'chainguard-dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/chainguard-dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/chainguard-dev' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/chainguard-dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/chainguard-dev' as const,
}

export type ChainguarddevPackage = typeof chainguarddevPackage
