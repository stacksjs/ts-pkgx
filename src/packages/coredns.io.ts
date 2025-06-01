/**
 * **coredns** - Crafters of fine Open Source products
 *
 * @domain `coredns.io`
 *
 * @install `pkgx coredns.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.corednsio
 * console.log(pkg.name)        // "coredns"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coredns-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const corednsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'coredns' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/coredns.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'coredns.io' as const,
  fullPath: 'coredns.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx coredns.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CorednsioPackage = typeof corednsioPackage
