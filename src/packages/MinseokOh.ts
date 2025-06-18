/**
 * **MinseokOh** - pkgx package
 *
 * @domain `github.com/MinseokOh`
 *
 * @install `pkgx github.com/MinseokOh`
 * @name `MinseokOh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.MinseokOh
 * // Or access via domain
 * const samePkg = pantry.githubcomminseokoh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "MinseokOh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MinseokOh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const minseokOhPackage = {
  /**
   * The display name of this package.
   */
  name: 'MinseokOh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MinseokOh' as const,
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
  installCommand: 'pkgx github.com/MinseokOh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/MinseokOh' as const,
}

export type MinseokOhPackage = typeof minseokOhPackage
