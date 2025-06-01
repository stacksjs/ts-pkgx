/**
 * **lftp** - Crafters of fine Open Source products
 *
 * @domain `lftp.yar.ru`
 *
 * @install `pkgx lftp.yar.ru`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lftpyarru
 * console.log(pkg.name)        // "lftp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lftp-yar-ru.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lftpyarruPackage = {
  /**
   * The display name of this package.
   */
  name: 'lftp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lftp.yar.ru/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lftp.yar.ru' as const,
  fullPath: 'lftp.yar.ru' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lftp.yar.ru' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LftpyarruPackage = typeof lftpyarruPackage
