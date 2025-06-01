/**
 * **bun** - Crafters of fine Open Source products
 *
 * @domain `bun.sh`
 *
 * @install `pkgx bun.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bunsh
 * console.log(pkg.name)        // "bun"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bun-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bunshPackage = {
  /**
   * The display name of this package.
   */
  name: 'bun' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/bun.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bun.sh' as const,
  fullPath: 'bun.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bun.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BunshPackage = typeof bunshPackage
