/**
 * **cilium.io** - Go home.
 *
 * @domain `cilium.io`
 *
 * @install `pkgx cilium.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ciliumio
 * console.log(pkg.name)        // "cilium.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cilium-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ciliumioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/cilium.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cilium.io' as const,
  fullPath: 'cilium.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cilium.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CiliumioPackage = typeof ciliumioPackage
