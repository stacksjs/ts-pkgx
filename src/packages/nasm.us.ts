/**
 * **nasm.us** - Crafters of fine Open Source products
 *
 * @domain `nasm.us`
 *
 * @install `pkgx nasm.us`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nasmus
 * console.log(pkg.name)        // "nasm.us"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nasm-us.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nasmusPackage = {
  /**
   * The display name of this package.
   */
  name: 'nasm.us' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nasm.us/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nasm.us' as const,
  fullPath: 'nasm.us' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nasm.us' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NasmusPackage = typeof nasmusPackage
