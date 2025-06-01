/**
 * **coder** - Crafters of fine Open Source products
 *
 * @domain `coder.com`
 *
 * @install `pkgx coder.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.codercom
 * console.log(pkg.name)        // "coder"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coder-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'coder' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/coder.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'coder.com' as const,
  fullPath: 'coder.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx coder.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CodercomPackage = typeof codercomPackage
