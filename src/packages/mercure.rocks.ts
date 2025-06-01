/**
 * **mercure** - Crafters of fine Open Source products
 *
 * @domain `mercure.rocks`
 *
 * @install `pkgx mercure.rocks`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mercurerocks
 * console.log(pkg.name)        // "mercure"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mercure-rocks.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mercurerocksPackage = {
  /**
   * The display name of this package.
   */
  name: 'mercure' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mercure.rocks/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mercure.rocks' as const,
  fullPath: 'mercure.rocks' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mercure.rocks' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MercurerocksPackage = typeof mercurerocksPackage
