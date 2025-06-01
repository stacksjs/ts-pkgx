/**
 * **microcks-cli** - Crafters of fine Open Source products
 *
 * @domain `microcks.io`
 *
 * @install `pkgx microcks.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microcksio
 * console.log(pkg.name)        // "microcks-cli"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microcks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microcksioPackage = {
  /**
   * The display name of this package.
   */
  name: 'microcks-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/microcks.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microcks.io' as const,
  fullPath: 'microcks.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx microcks.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MicrocksioPackage = typeof microcksioPackage
