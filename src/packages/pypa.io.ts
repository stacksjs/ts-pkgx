/**
 * **pypa.io** - Go home.
 *
 * @domain `pypa.io`
 *
 * @install `pkgx pypa.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaio
 * console.log(pkg.name)        // "pypa.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypaioPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pypa.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io' as const,
  fullPath: 'pypa.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pypa.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PypaioPackage = typeof pypaioPackage
