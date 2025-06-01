/**
 * **go.dev** - Crafters of fine Open Source products
 *
 * @domain `go.dev`
 *
 * @install `pkgx go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.godev
 * console.log(pkg.name)        // "go.dev"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const godevPackage = {
  /**
   * The display name of this package.
   */
  name: 'go.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/go.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.dev' as const,
  fullPath: 'go.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx go.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GodevPackage = typeof godevPackage
