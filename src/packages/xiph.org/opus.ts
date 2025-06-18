/**
 * **opus** - pkgx package
 *
 * @domain `xiph.org/opus`
 *
 * @install `pkgx xiph.org/opus`
 * @name `opus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.opus
 * // Or access via domain
 * const samePkg = pantry.xiphorgopus
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "opus"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xiph-org/opus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opusPackage = {
  /**
   * The display name of this package.
   */
  name: 'opus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xiph.org/opus' as const,
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
  installCommand: 'pkgx xiph.org/opus' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'xiph.org/opus' as const,
}

export type OpusPackage = typeof opusPackage
