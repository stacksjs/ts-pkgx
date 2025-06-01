/**
 * **zeromq.org** - Crafters of fine Open Source products
 *
 * @domain `zeromq.org`
 *
 * @install `pkgx zeromq.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zeromqorg
 * console.log(pkg.name)        // "zeromq.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zeromq-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zeromqorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'zeromq.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/zeromq.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zeromq.org' as const,
  fullPath: 'zeromq.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx zeromq.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ZeromqorgPackage = typeof zeromqorgPackage
