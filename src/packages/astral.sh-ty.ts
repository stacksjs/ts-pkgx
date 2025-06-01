/**
 * **astral.sh-ty** - Go home.
 *
 * @domain `astral.sh-ty`
 *
 * @install `pkgx astral.sh-ty`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astralshty
 * console.log(pkg.name)        // "astral.sh-ty"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh-ty.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astralshtyPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/astral.sh-ty/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh-ty' as const,
  fullPath: 'astral.sh-ty' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx astral.sh-ty' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AstralshtyPackage = typeof astralshtyPackage
