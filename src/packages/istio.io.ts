/**
 * **istioctl** - Crafters of fine Open Source products
 *
 * @domain `istio.io`
 *
 * @install `pkgx istio.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.istioio
 * console.log(pkg.name)        // "istioctl"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/istio-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const istioioPackage = {
  /**
   * The display name of this package.
   */
  name: 'istioctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/istio.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'istio.io' as const,
  fullPath: 'istio.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx istio.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IstioioPackage = typeof istioioPackage
