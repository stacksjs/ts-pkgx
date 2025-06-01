/**
 * **pagure.io** - Go home.
 *
 * @domain `pagure.io`
 *
 * @install `pkgx pagure.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pagureio
 * console.log(pkg.name)        // "pagure.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pagure-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pagureioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/pagure.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pagure.io' as const,
  fullPath: 'pagure.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pagure.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PagureioPackage = typeof pagureioPackage
