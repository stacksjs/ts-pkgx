/**
 * **caarlos0** - pkgx package
 *
 * @domain `github.com/caarlos0`
 *
 * @install `pkgx github.com/caarlos0`
 * @name `caarlos0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.caarlos0
 * // Or access via domain
 * const samePkg = pantry.githubcomcaarlos0
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "caarlos0"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caarlos0.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caarlos0Package = {
  /**
   * The display name of this package.
   */
  name: 'caarlos0' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caarlos0' as const,
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
  installCommand: 'pkgx github.com/caarlos0' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/caarlos0' as const,
}

export type Caarlos0Package = typeof caarlos0Package
