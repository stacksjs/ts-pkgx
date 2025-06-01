/**
 * **dkrz.de** - Go home.
 *
 * @domain `dkrz.de`
 *
 * @install `pkgx dkrz.de`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dkrzde
 * console.log(pkg.name)        // "dkrz.de"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dkrz-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dkrzdePackage = {
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
  homepage: 'https://pkgx.dev/pkgs/dkrz.de/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dkrz.de' as const,
  fullPath: 'dkrz.de' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dkrz.de' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DkrzdePackage = typeof dkrzdePackage
