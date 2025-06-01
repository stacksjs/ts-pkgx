/**
 * **cask** - Crafters of fine Open Source products
 *
 * @domain `cask.readthedocs.io`
 *
 * @install `pkgx cask.readthedocs.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.caskreadthedocsio
 * console.log(pkg.name)        // "cask"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cask-readthedocs-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caskreadthedocsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cask' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cask.readthedocs.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cask.readthedocs.io' as const,
  fullPath: 'cask.readthedocs.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cask.readthedocs.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CaskreadthedocsioPackage = typeof caskreadthedocsioPackage
