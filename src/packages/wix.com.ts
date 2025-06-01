/**
 * **wix.com** - Go home.
 *
 * @domain `wix.com`
 *
 * @install `pkgx wix.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wixcom
 * console.log(pkg.name)        // "wix.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wix-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wixcomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wix.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wix.com' as const,
  fullPath: 'wix.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wix.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WixcomPackage = typeof wixcomPackage
