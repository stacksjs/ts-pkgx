/**
 * **hadrons.org** - Go home.
 *
 * @domain `hadrons.org`
 *
 * @install `pkgx hadrons.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hadronsorg
 * console.log(pkg.name)        // "hadrons.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hadrons-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hadronsorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/hadrons.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hadrons.org' as const,
  fullPath: 'hadrons.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hadrons.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HadronsorgPackage = typeof hadronsorgPackage
