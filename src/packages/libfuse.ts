/**
 * **libfuse** - pkgx package
 *
 * @domain `github.com/libfuse`
 *
 * @install `pkgx github.com/libfuse`
 * @name `libfuse`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libfuse
 * // Or access via domain
 * const samePkg = pantry.githubcomlibfuse
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libfuse"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libfuse.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libfusePackage = {
  /**
   * The display name of this package.
   */
  name: 'libfuse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libfuse' as const,
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
  installCommand: 'pkgx github.com/libfuse' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/libfuse' as const,
}

export type LibfusePackage = typeof libfusePackage
