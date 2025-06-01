/**
 * **rye** - Crafters of fine Open Source products
 *
 * @domain `rye.astral.sh`
 *
 * @install `pkgx rye.astral.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ryeastralsh
 * console.log(pkg.name)        // "rye"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rye-astral-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ryeastralshPackage = {
  /**
   * The display name of this package.
   */
  name: 'rye' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rye.astral.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rye.astral.sh' as const,
  fullPath: 'rye.astral.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rye.astral.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RyeastralshPackage = typeof ryeastralshPackage
