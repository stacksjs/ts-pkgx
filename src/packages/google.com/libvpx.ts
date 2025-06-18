/**
 * **libvpx** - pkgx package
 *
 * @domain `google.com/libvpx`
 *
 * @install `pkgx google.com/libvpx`
 * @name `libvpx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libvpx
 * // Or access via domain
 * const samePkg = pantry.googlecomlibvpx
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libvpx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/libvpx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libvpxPackage = {
  /**
   * The display name of this package.
   */
  name: 'libvpx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/libvpx' as const,
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
  installCommand: 'pkgx google.com/libvpx' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'google.com/libvpx' as const,
}

export type LibvpxPackage = typeof libvpxPackage
