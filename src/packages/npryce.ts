/**
 * **npryce** - pkgx package
 *
 * @domain `github.com/npryce`
 *
 * @install `pkgx github.com/npryce`
 * @name `npryce`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.npryce
 * // Or access via domain
 * const samePkg = pantry.githubcomnpryce
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "npryce"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/npryce.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nprycePackage = {
  /**
   * The display name of this package.
   */
  name: 'npryce' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/npryce' as const,
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
  installCommand: 'pkgx github.com/npryce' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/npryce' as const,
}

export type NprycePackage = typeof nprycePackage
