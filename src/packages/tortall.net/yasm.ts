/**
 * **yasm** - pkgx package
 *
 * @domain `tortall.net/yasm`
 *
 * @install `pkgx tortall.net/yasm`
 * @name `yasm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yasm
 * // Or access via domain
 * const samePkg = pantry.tortallnetyasm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yasm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tortall-net/yasm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yasmPackage = {
  /**
   * The display name of this package.
   */
  name: 'yasm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tortall.net/yasm' as const,
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
  installCommand: 'pkgx tortall.net/yasm' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'tortall.net/yasm' as const,
}

export type YasmPackage = typeof yasmPackage
