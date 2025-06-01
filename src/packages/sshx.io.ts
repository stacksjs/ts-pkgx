/**
 * **sshx** - Crafters of fine Open Source products
 *
 * @domain `sshx.io`
 *
 * @install `pkgx sshx.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sshxio
 * console.log(pkg.name)        // "sshx"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sshx-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sshxioPackage = {
  /**
   * The display name of this package.
   */
  name: 'sshx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sshx.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sshx.io' as const,
  fullPath: 'sshx.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sshx.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SshxioPackage = typeof sshxioPackage
