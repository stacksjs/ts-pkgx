/**
 * **go-acme** - pkgx package
 *
 * @domain `github.com/go-acme`
 *
 * @install `pkgx github.com/go-acme`
 * @name `go-acme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.goacme
 * // Or access via domain
 * const samePkg = pantry.githubcomgoacme
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "go-acme"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/go-acme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const goacmePackage = {
  /**
   * The display name of this package.
   */
  name: 'go-acme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/go-acme' as const,
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
  installCommand: 'pkgx github.com/go-acme' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/go-acme' as const,
}

export type GoacmePackage = typeof goacmePackage
