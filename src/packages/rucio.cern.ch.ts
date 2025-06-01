/**
 * **rucio.cern.ch** - Go home.
 *
 * @domain `rucio.cern.ch`
 *
 * @install `pkgx rucio.cern.ch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ruciocernch
 * console.log(pkg.name)        // "rucio.cern.ch"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rucio-cern-ch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ruciocernchPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/rucio.cern.ch/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rucio.cern.ch' as const,
  fullPath: 'rucio.cern.ch' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rucio.cern.ch' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RuciocernchPackage = typeof ruciocernchPackage
