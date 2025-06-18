/**
 * **AOMediaCodec** - pkgx package
 *
 * @domain `github.com/AOMediaCodec`
 *
 * @install `pkgx github.com/AOMediaCodec`
 * @name `AOMediaCodec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.AOMediaCodec
 * // Or access via domain
 * const samePkg = pantry.githubcomaomediacodec
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "AOMediaCodec"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AOMediaCodec.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aOMediaCodecPackage = {
  /**
   * The display name of this package.
   */
  name: 'AOMediaCodec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AOMediaCodec' as const,
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
  installCommand: 'pkgx github.com/AOMediaCodec' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/AOMediaCodec' as const,
}

export type AOMediaCodecPackage = typeof aOMediaCodecPackage
