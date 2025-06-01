/**
 * **poetry** - Crafters of fine Open Source products
 *
 * @domain `python-poetry.org`
 *
 * @install `pkgx python-poetry.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pythonpoetryorg
 * console.log(pkg.name)        // "poetry"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-poetry-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonpoetryorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'poetry' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/python-poetry.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'python-poetry.org' as const,
  fullPath: 'python-poetry.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx python-poetry.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PythonpoetryorgPackage = typeof pythonpoetryorgPackage
