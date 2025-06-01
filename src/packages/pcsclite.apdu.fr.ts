/**
 * **pcsc-lite** - Crafters of fine Open Source products
 *
 * @domain `pcsclite.apdu.fr`
 *
 * @install `pkgx pcsclite.apdu.fr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pcscliteapdufr
 * console.log(pkg.name)        // "pcsc-lite"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pcsclite-apdu-fr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcscliteapdufrPackage = {
  /**
   * The display name of this package.
   */
  name: 'pcsc-lite' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pcsclite.apdu.fr/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pcsclite.apdu.fr' as const,
  fullPath: 'pcsclite.apdu.fr' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pcsclite.apdu.fr' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PcscliteapdufrPackage = typeof pcscliteapdufrPackage
