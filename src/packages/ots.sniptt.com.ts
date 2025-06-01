/**
 * **ots** - Crafters of fine Open Source products
 *
 * @domain `ots.sniptt.com`
 *
 * @install `pkgx ots.sniptt.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.otssnipttcom
 * console.log(pkg.name)        // "ots"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ots-sniptt-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const otssnipttcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ots' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ots.sniptt.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ots.sniptt.com' as const,
  fullPath: 'ots.sniptt.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ots.sniptt.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OtssnipttcomPackage = typeof otssnipttcomPackage
