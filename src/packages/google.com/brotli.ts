/**
 * **brotli** - pkgx package
 *
 * @domain `google.com/brotli`
 *
 * @install `pkgx google.com/brotli`
 * @name `brotli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.brotli
 * // Or access via domain
 * const samePkg = pantry.googlecombrotli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "brotli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/brotli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const brotliPackage = {
  /**
   * The display name of this package.
   */
  name: 'brotli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/brotli' as const,
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
  installCommand: 'pkgx google.com/brotli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'google.com/brotli' as const,
}

export type BrotliPackage = typeof brotliPackage
