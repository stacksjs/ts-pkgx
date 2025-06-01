/**
 * **pyyaml.org** - Crafters of fine Open Source products
 *
 * @domain `pyyaml.org`
 *
 * @install `pkgx pyyaml.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pyyamlorg
 * console.log(pkg.name)        // "pyyaml.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pyyaml-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyyamlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyyaml.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pyyaml.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pyyaml.org' as const,
  fullPath: 'pyyaml.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pyyaml.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PyyamlorgPackage = typeof pyyamlorgPackage
