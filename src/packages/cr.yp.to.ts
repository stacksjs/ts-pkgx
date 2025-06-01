/**
 * **cr.yp.to** - Go home.
 *
 * @domain `cr.yp.to`
 *
 * @install `pkgx cr.yp.to`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.crypto
 * console.log(pkg.name)        // "cr.yp.to"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cr-yp-to.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cryptoPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/cr.yp.to/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cr.yp.to' as const,
  fullPath: 'cr.yp.to' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cr.yp.to' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CryptoPackage = typeof cryptoPackage
