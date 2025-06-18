/**
 * **nemtrif** - pkgx package
 *
 * @domain `github.com/nemtrif`
 *
 * @install `pkgx github.com/nemtrif`
 * @name `nemtrif`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nemtrif
 * // Or access via domain
 * const samePkg = pantry.githubcomnemtrif
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nemtrif"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nemtrif.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nemtrifPackage = {
  /**
   * The display name of this package.
   */
  name: 'nemtrif' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nemtrif' as const,
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
  installCommand: 'pkgx github.com/nemtrif' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/nemtrif' as const,
}

export type NemtrifPackage = typeof nemtrifPackage
