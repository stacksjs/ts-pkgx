/**
 * **astral.sh-ruff** - Go home.
 *
 * @domain `astral.sh-ruff`
 *
 * @install `pkgx astral.sh-ruff`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astralshruff
 * console.log(pkg.name)        // "astral.sh-ruff"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh-ruff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astralshruffPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/astral.sh-ruff/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh-ruff' as const,
  fullPath: 'astral.sh-ruff' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx astral.sh-ruff' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AstralshruffPackage = typeof astralshruffPackage
