/**
 * **priver.dev** - Go home.
 *
 * @domain `priver.dev`
 *
 * @install `pkgx priver.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.priverdev
 * console.log(pkg.name)        // "priver.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/priver-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const priverdevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/priver.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'priver.dev' as const,
  fullPath: 'priver.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx priver.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PriverdevPackage = typeof priverdevPackage
