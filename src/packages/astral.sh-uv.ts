/**
 * **astral.sh-uv** - Go home.
 *
 * @domain `astral.sh-uv`
 *
 * @install `pkgx astral.sh-uv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astralshuv
 * console.log(pkg.name)        // "astral.sh-uv"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh-uv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astralshuvPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/astral.sh-uv/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh-uv' as const,
  fullPath: 'astral.sh-uv' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx astral.sh-uv' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AstralshuvPackage = typeof astralshuvPackage
