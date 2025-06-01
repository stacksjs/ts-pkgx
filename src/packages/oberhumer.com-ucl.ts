/**
 * **oberhumer.com-ucl** - Go home.
 *
 * @domain `oberhumer.com-ucl`
 *
 * @install `pkgx oberhumer.com-ucl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oberhumercomucl
 * console.log(pkg.name)        // "oberhumer.com-ucl"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oberhumer-com-ucl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oberhumercomuclPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/oberhumer.com-ucl/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oberhumer.com-ucl' as const,
  fullPath: 'oberhumer.com-ucl' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx oberhumer.com-ucl' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OberhumercomuclPackage = typeof oberhumercomuclPackage
