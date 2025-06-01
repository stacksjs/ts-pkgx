/**
 * **indexsupply.com** - Go home.
 *
 * @domain `indexsupply.com`
 *
 * @install `pkgx indexsupply.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.indexsupplycom
 * console.log(pkg.name)        // "indexsupply.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/indexsupply-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const indexsupplycomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/indexsupply.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'indexsupply.com' as const,
  fullPath: 'indexsupply.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx indexsupply.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IndexsupplycomPackage = typeof indexsupplycomPackage
