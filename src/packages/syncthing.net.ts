/**
 * **syncthing** - Crafters of fine Open Source products
 *
 * @domain `syncthing.net`
 *
 * @install `pkgx syncthing.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.syncthingnet
 * console.log(pkg.name)        // "syncthing"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/syncthing-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const syncthingnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'syncthing' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/syncthing.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'syncthing.net' as const,
  fullPath: 'syncthing.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx syncthing.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SyncthingnetPackage = typeof syncthingnetPackage
