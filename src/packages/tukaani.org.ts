/**
 * **tukaani.org** - Go home.
 *
 * @domain `tukaani.org`
 *
 * @install `pkgx tukaani.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tukaaniorg
 * console.log(pkg.name)        // "tukaani.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tukaani-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tukaaniorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/tukaani.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tukaani.org' as const,
  fullPath: 'tukaani.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tukaani.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TukaaniorgPackage = typeof tukaaniorgPackage
