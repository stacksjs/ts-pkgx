/**
 * **wagoodman** - pkgx package
 *
 * @domain `github.com/wagoodman`
 *
 * @install `pkgx github.com/wagoodman`
 * @name `wagoodman`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.wagoodman
 * // Or access via domain
 * const samePkg = pantry.githubcomwagoodman
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wagoodman"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/wagoodman.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wagoodmanPackage = {
  /**
   * The display name of this package.
   */
  name: 'wagoodman' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/wagoodman' as const,
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
  installCommand: 'pkgx github.com/wagoodman' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/wagoodman' as const,
}

export type WagoodmanPackage = typeof wagoodmanPackage
