/**
 * **rsync** - Crafters of fine Open Source products
 *
 * @domain `rsync.samba.org`
 *
 * @install `pkgx rsync.samba.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rsyncsambaorg
 * console.log(pkg.name)        // "rsync"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rsync-samba-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rsyncsambaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rsync' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rsync.samba.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rsync.samba.org' as const,
  fullPath: 'rsync.samba.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rsync.samba.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RsyncsambaorgPackage = typeof rsyncsambaorgPackage
