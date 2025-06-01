/**
 * **microbrew.org** - Go home.
 *
 * @domain `microbrew.org`
 *
 * @install `pkgx microbrew.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microbreworg
 * console.log(pkg.name)        // "microbrew.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microbrew-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microbreworgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/microbrew.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microbrew.org' as const,
  fullPath: 'microbrew.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx microbrew.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MicrobreworgPackage = typeof microbreworgPackage
