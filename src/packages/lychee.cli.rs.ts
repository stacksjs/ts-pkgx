/**
 * **lychee** - Crafters of fine Open Source products
 *
 * @domain `lychee.cli.rs`
 *
 * @install `pkgx lychee.cli.rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lycheeclirs
 * console.log(pkg.name)        // "lychee"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lychee-cli-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lycheeclirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'lychee' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lychee.cli.rs/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lychee.cli.rs' as const,
  fullPath: 'lychee.cli.rs' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lychee.cli.rs' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LycheeclirsPackage = typeof lycheeclirsPackage
