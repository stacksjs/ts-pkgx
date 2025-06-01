/**
 * **npmjs.com** - Crafters of fine Open Source products
 *
 * @domain `npmjs.com`
 *
 * @install `pkgx npmjs.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.npmjscom
 * console.log(pkg.name)        // "npmjs.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/npmjs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const npmjscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'npmjs.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/npmjs.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'npmjs.com' as const,
  fullPath: 'npmjs.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx npmjs.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NpmjscomPackage = typeof npmjscomPackage
