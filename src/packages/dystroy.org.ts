/**
 * **dystroy.org** - Go home.
 *
 * @domain `dystroy.org`
 *
 * @install `pkgx dystroy.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dystroyorg
 * console.log(pkg.name)        // "dystroy.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dystroy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dystroyorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/dystroy.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dystroy.org' as const,
  fullPath: 'dystroy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dystroy.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DystroyorgPackage = typeof dystroyorgPackage
