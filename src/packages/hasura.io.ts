/**
 * **hasura** - Crafters of fine Open Source products
 *
 * @domain `hasura.io`
 *
 * @install `pkgx hasura.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hasuraio
 * console.log(pkg.name)        // "hasura"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hasura-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hasuraioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hasura' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/hasura.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hasura.io' as const,
  fullPath: 'hasura.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hasura.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HasuraioPackage = typeof hasuraioPackage
