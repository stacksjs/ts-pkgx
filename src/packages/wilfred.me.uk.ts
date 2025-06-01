/**
 * **wilfred.me.uk** - Go home.
 *
 * @domain `wilfred.me.uk`
 *
 * @install `pkgx wilfred.me.uk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wilfredmeuk
 * console.log(pkg.name)        // "wilfred.me.uk"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wilfred-me-uk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wilfredmeukPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/wilfred.me.uk/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wilfred.me.uk' as const,
  fullPath: 'wilfred.me.uk' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wilfred.me.uk' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WilfredmeukPackage = typeof wilfredmeukPackage
