/**
 * **fermyon.com** - Go home.
 *
 * @domain `fermyon.com`
 *
 * @install `pkgx fermyon.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fermyoncom
 * console.log(pkg.name)        // "fermyon.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fermyon-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fermyoncomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/fermyon.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fermyon.com' as const,
  fullPath: 'fermyon.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fermyon.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FermyoncomPackage = typeof fermyoncomPackage
