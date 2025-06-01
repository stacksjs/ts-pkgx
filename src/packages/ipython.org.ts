/**
 * **ipython** - Crafters of fine Open Source products
 *
 * @domain `ipython.org`
 *
 * @install `pkgx ipython.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ipythonorg
 * console.log(pkg.name)        // "ipython"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ipython-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ipythonorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ipython' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ipython.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ipython.org' as const,
  fullPath: 'ipython.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ipython.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IpythonorgPackage = typeof ipythonorgPackage
