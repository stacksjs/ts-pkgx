/**
 * **python** - Crafters of fine Open Source products
 *
 * @domain `python.org`
 *
 * @install `pkgx python.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pythonorg
 * console.log(pkg.name)        // "python"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'python' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/python.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'python.org' as const,
  fullPath: 'python.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx python.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PythonorgPackage = typeof pythonorgPackage
