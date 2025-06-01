/**
 * **ack** - Crafters of fine Open Source products
 *
 * @domain `beyondgrep.com`
 *
 * @install `pkgx beyondgrep.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.beyondgrepcom
 * console.log(pkg.name)        // "ack"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/beyondgrep-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const beyondgrepcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/beyondgrep.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'beyondgrep.com' as const,
  fullPath: 'beyondgrep.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx beyondgrep.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BeyondgrepcomPackage = typeof beyondgrepcomPackage
