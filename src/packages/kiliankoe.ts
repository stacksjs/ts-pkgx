/**
 * **kiliankoe** - pkgx package
 *
 * @domain `github.com/kiliankoe`
 *
 * @install `pkgx github.com/kiliankoe`
 * @name `kiliankoe`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kiliankoe
 * // Or access via domain
 * const samePkg = pantry.githubcomkiliankoe
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kiliankoe"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kiliankoe.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kiliankoePackage = {
  /**
   * The display name of this package.
   */
  name: 'kiliankoe' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kiliankoe' as const,
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
  installCommand: 'pkgx github.com/kiliankoe' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/kiliankoe' as const,
}

export type KiliankoePackage = typeof kiliankoePackage
