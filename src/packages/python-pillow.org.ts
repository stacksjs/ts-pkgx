/**
 * **python-pillow.org** - Crafters of fine Open Source products
 *
 * @domain `python-pillow.org`
 *
 * @install `pkgx python-pillow.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pythonpilloworg
 * console.log(pkg.name)        // "python-pillow.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-pillow-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonpilloworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-pillow.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/python-pillow.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'python-pillow.org' as const,
  fullPath: 'python-pillow.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx python-pillow.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PythonpilloworgPackage = typeof pythonpilloworgPackage
