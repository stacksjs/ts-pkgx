/**
 * **astral.sh** - Go home.
 *
 * @domain `astral.sh`
 *
 * @install `pkgx astral.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astralsh
 * console.log(pkg.name)        // "astral.sh"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astralshPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/astral.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh' as const,
  fullPath: 'astral.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx astral.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AstralshPackage = typeof astralshPackage
