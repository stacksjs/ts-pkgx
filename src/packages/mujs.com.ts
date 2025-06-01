/**
 * **mujs** - Crafters of fine Open Source products
 *
 * @domain `mujs.com`
 *
 * @install `pkgx mujs.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mujscom
 * console.log(pkg.name)        // "mujs"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mujs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mujscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mujs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mujs.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mujs.com' as const,
  fullPath: 'mujs.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mujs.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MujscomPackage = typeof mujscomPackage
