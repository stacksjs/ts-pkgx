/**
 * **pantsbuild.org** - Go home.
 *
 * @domain `pantsbuild.org`
 *
 * @install `pkgx pantsbuild.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pantsbuildorg
 * console.log(pkg.name)        // "pantsbuild.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pantsbuild-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pantsbuildorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/pantsbuild.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pantsbuild.org' as const,
  fullPath: 'pantsbuild.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pantsbuild.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PantsbuildorgPackage = typeof pantsbuildorgPackage
