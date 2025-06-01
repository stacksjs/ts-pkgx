/**
 * **agwa.name** - Go home.
 *
 * @domain `agwa.name`
 *
 * @install `pkgx agwa.name`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.agwaname
 * console.log(pkg.name)        // "agwa.name"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/agwa-name.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agwanamePackage = {
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
  homepage: 'https://pkgx.dev/pkgs/agwa.name/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'agwa.name' as const,
  fullPath: 'agwa.name' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx agwa.name' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AgwanamePackage = typeof agwanamePackage
