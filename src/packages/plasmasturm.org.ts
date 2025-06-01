/**
 * **plasmasturm.org** - Go home.
 *
 * @domain `plasmasturm.org`
 *
 * @install `pkgx plasmasturm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.plasmasturmorg
 * console.log(pkg.name)        // "plasmasturm.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plasmasturm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plasmasturmorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/plasmasturm.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plasmasturm.org' as const,
  fullPath: 'plasmasturm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx plasmasturm.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PlasmasturmorgPackage = typeof plasmasturmorgPackage
