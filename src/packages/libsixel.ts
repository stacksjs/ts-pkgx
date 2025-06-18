/**
 * **libsixel** - pkgx package
 *
 * @domain `github.com/libsixel`
 *
 * @install `pkgx github.com/libsixel`
 * @name `libsixel`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libsixel
 * // Or access via domain
 * const samePkg = pantry.githubcomlibsixel
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libsixel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libsixel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsixelPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsixel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libsixel' as const,
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
  installCommand: 'pkgx github.com/libsixel' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/libsixel' as const,
}

export type LibsixelPackage = typeof libsixelPackage
