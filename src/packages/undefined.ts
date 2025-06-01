/**
 * **undefined** - Go home.
 *
 * @domain `undefined`
 *
 * @install `pkgx undefined`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.undefined
 * console.log(pkg.name)        // "undefined"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/undefined.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const undefinedPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/undefined/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'undefined' as const,
  fullPath: 'undefined' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx undefined' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type UndefinedPackage = typeof undefinedPackage
