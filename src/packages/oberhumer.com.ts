/**
 * **oberhumer.com** - Go home.
 *
 * @domain `oberhumer.com`
 *
 * @install `pkgx oberhumer.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oberhumercom
 * console.log(pkg.name)        // "oberhumer.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oberhumer-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oberhumercomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/oberhumer.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oberhumer.com' as const,
  fullPath: 'oberhumer.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx oberhumer.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OberhumercomPackage = typeof oberhumercomPackage
