/**
 * **frei0r.dyne.org** - Crafters of fine Open Source products
 *
 * @domain `frei0r.dyne.org`
 *
 * @install `pkgx frei0r.dyne.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.frei0rdyneorg
 * console.log(pkg.name)        // "frei0r.dyne.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/frei0r-dyne-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const frei0rdyneorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'frei0r.dyne.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/frei0r.dyne.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'frei0r.dyne.org' as const,
  fullPath: 'frei0r.dyne.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx frei0r.dyne.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Frei0rdyneorgPackage = typeof frei0rdyneorgPackage
