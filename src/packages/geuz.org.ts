/**
 * **geuz.org** - Go home.
 *
 * @domain `geuz.org`
 *
 * @install `pkgx geuz.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.geuzorg
 * console.log(pkg.name)        // "geuz.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/geuz-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const geuzorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/geuz.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'geuz.org' as const,
  fullPath: 'geuz.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx geuz.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GeuzorgPackage = typeof geuzorgPackage
