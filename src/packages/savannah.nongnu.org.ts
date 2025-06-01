/**
 * **savannah.nongnu.org** - Go home.
 *
 * @domain `savannah.nongnu.org`
 *
 * @install `pkgx savannah.nongnu.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.savannahnongnuorg
 * console.log(pkg.name)        // "savannah.nongnu.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/savannah-nongnu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const savannahnongnuorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/savannah.nongnu.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'savannah.nongnu.org' as const,
  fullPath: 'savannah.nongnu.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx savannah.nongnu.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SavannahnongnuorgPackage = typeof savannahnongnuorgPackage
