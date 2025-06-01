/**
 * **developers.yubico.com** - Go home.
 *
 * @domain `developers.yubico.com`
 *
 * @install `pkgx developers.yubico.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.developersyubicocom
 * console.log(pkg.name)        // "developers.yubico.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developers-yubico-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const developersyubicocomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/developers.yubico.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'developers.yubico.com' as const,
  fullPath: 'developers.yubico.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx developers.yubico.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DevelopersyubicocomPackage = typeof developersyubicocomPackage
