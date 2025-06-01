/**
 * **jless** - Crafters of fine Open Source products
 *
 * @domain `jless.io`
 *
 * @install `pkgx jless.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jlessio
 * console.log(pkg.name)        // "jless"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jless-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jlessioPackage = {
  /**
   * The display name of this package.
   */
  name: 'jless' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jless.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jless.io' as const,
  fullPath: 'jless.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jless.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JlessioPackage = typeof jlessioPackage
