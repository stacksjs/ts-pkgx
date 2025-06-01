/**
 * **rbenv.org** - Go home.
 *
 * @domain `rbenv.org`
 *
 * @install `pkgx rbenv.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rbenvorg
 * console.log(pkg.name)        // "rbenv.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rbenv-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rbenvorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/rbenv.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rbenv.org' as const,
  fullPath: 'rbenv.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rbenv.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RbenvorgPackage = typeof rbenvorgPackage
