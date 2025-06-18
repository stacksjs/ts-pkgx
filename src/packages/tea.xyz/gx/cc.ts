/**
 * **gx/cc** - pkgx package
 *
 * @domain `tea.xyz/gx/cc`
 *
 * @install `pkgx tea.xyz/gx/cc`
 * @aliases `gx/cc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gxcc
 * // Or access via domain
 * const samePkg = pantry.teaxyzgxcc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tea-xyz/gx/cc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gxccPackage = {
  /**
   * The display name of this package.
   */
  name: 'gx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tea.xyz/gx/cc' as const,
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
  installCommand: 'pkgx tea.xyz/gx/cc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gx/cc',
  ] as const,
  fullPath: 'tea.xyz/gx/cc' as const,
}

export type GxccPackage = typeof gxccPackage
