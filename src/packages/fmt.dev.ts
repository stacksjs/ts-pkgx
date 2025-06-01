/**
 * **fmt.dev** - Crafters of fine Open Source products
 *
 * @domain `fmt.dev`
 *
 * @install `pkgx fmt.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fmtdev
 * console.log(pkg.name)        // "fmt.dev"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fmt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fmtdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'fmt.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fmt.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fmt.dev' as const,
  fullPath: 'fmt.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fmt.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FmtdevPackage = typeof fmtdevPackage
