/**
 * **pocket** - Crafters of fine Open Source products
 *
 * @domain `pokt.network`
 * @programs `pocket`
 * @version `0.9.20.12.00.11.30.11.20.11.10.10.40.10.30.10.0` (9 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/pokt-network.md
 *
 * @install `pkgx pokt.network`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.poktnetwork
 * console.log(pkg.name)        // "pocket"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * console.log(pkg.programs)    // ["pocket"]
 * console.log(pkg.versions[0]) // "0.9.20.12.00.11.30.11.20.11.10.10.40.10.30.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pokt-network.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const poktnetworkPackage = {
  /**
   * The display name of this package.
   */
  name: 'pocket' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.20.12.00.11.30.11.20.11.10.10.40.10.30.10.0',
    '0.9.2',
    '0.12.0',
    '0.11.3',
    '0.11.2',
    '0.11.1',
    '0.10.4',
    '0.10.3',
    '0.10.0',
  ] as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pocket',
  ] as const,
  homepage: 'https://pkgx.dev/pkgs/pokt.network/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pokt.network' as const,
  fullPath: 'pokt.network' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pokt.network' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PoktnetworkPackage = typeof poktnetworkPackage
