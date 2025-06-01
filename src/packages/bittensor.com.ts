/**
 * **Bittensor** - Crafters of fine Open Source products
 *
 * @domain `bittensor.com`
 *
 * @install `pkgx bittensor.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bittensorcom
 * console.log(pkg.name)        // "Bittensor"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bittensor-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bittensorcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'Bittensor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/bittensor.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bittensor.com' as const,
  fullPath: 'bittensor.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bittensor.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BittensorcomPackage = typeof bittensorcomPackage
