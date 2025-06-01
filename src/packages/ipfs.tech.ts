/**
 * **ipfs** - Crafters of fine Open Source products
 *
 * @domain `ipfs.tech`
 *
 * @install `pkgx ipfs.tech`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ipfstech
 * console.log(pkg.name)        // "ipfs"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ipfs-tech.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ipfstechPackage = {
  /**
   * The display name of this package.
   */
  name: 'ipfs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ipfs.tech/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ipfs.tech' as const,
  fullPath: 'ipfs.tech' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ipfs.tech' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IpfstechPackage = typeof ipfstechPackage
