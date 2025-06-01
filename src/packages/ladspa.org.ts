/**
 * **ladspa.org** - Crafters of fine Open Source products
 *
 * @domain `ladspa.org`
 *
 * @install `pkgx ladspa.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ladspaorg
 * console.log(pkg.name)        // "ladspa.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ladspa-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ladspaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ladspa.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ladspa.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ladspa.org' as const,
  fullPath: 'ladspa.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ladspa.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LadspaorgPackage = typeof ladspaorgPackage
