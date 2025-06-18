/**
 * **developers.yubico.com/yubikey-manager** - pkgx package
 *
 * @domain `developers.yubico.com/yubikey/manager`
 *
 * @install `pkgx developers.yubico.com/yubikey-manager`
 * @name `yubikey-manager`
 * @aliases `developers.yubico.com/yubikey-manager`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.developersyubicocomyubikeymanager
 * // Or access via domain
 * const samePkg = pantry.developersyubicocomyubikeymanager
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yubikey-manager"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developers-yubico-com/yubikey/manager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const developersyubicocomyubikeymanagerPackage = {
  /**
   * The display name of this package.
   */
  name: 'yubikey-manager' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'developers.yubico.com/yubikey/manager' as const,
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
  installCommand: 'pkgx developers.yubico.com/yubikey-manager' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'developers.yubico.com/yubikey-manager',
  ] as const,
  fullPath: 'developers.yubico.com/yubikey-manager' as const,
}

export type DevelopersyubicocomyubikeymanagerPackage = typeof developersyubicocomyubikeymanagerPackage
