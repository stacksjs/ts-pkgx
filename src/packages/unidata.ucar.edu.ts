/**
 * **unidata.ucar.edu** - Go home.
 *
 * @domain `unidata.ucar.edu`
 *
 * @install `pkgx unidata.ucar.edu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.unidataucaredu
 * console.log(pkg.name)        // "unidata.ucar.edu"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unidata-ucar-edu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unidataucareduPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/unidata.ucar.edu/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'unidata.ucar.edu' as const,
  fullPath: 'unidata.ucar.edu' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx unidata.ucar.edu' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type UnidataucareduPackage = typeof unidataucareduPackage
