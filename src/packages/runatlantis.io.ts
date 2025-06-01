/**
 * **atlantis** - Crafters of fine Open Source products
 *
 * @domain `runatlantis.io`
 *
 * @install `pkgx runatlantis.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.runatlantisio
 * console.log(pkg.name)        // "atlantis"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/runatlantis-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const runatlantisioPackage = {
  /**
   * The display name of this package.
   */
  name: 'atlantis' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/runatlantis.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'runatlantis.io' as const,
  fullPath: 'runatlantis.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx runatlantis.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RunatlantisioPackage = typeof runatlantisioPackage
