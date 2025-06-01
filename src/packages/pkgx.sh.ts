/**
 * **pkgx** - Crafters of fine Open Source products
 *
 * @domain `pkgx.sh`
 *
 * @install `pkgx pkgx.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxsh
 * console.log(pkg.name)        // "pkgx"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkgx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pkgx.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh' as const,
  fullPath: 'pkgx.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pkgx.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PkgxshPackage = typeof pkgxshPackage
