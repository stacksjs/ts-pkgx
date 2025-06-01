/**
 * **acorn.io** - Go home.
 *
 * @domain `acorn.io`
 *
 * @install `pkgx acorn.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.acornio
 * console.log(pkg.name)        // "acorn.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/acorn-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const acornioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/acorn.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'acorn.io' as const,
  fullPath: 'acorn.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx acorn.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AcornioPackage = typeof acornioPackage
