/**
 * **hurl** - Crafters of fine Open Source products
 *
 * @domain `hurl.dev`
 *
 * @install `pkgx hurl.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hurldev
 * console.log(pkg.name)        // "hurl"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hurl-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hurldevPackage = {
  /**
   * The display name of this package.
   */
  name: 'hurl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/hurl.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hurl.dev' as const,
  fullPath: 'hurl.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hurl.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HurldevPackage = typeof hurldevPackage
