/**
 * **conftest** - Crafters of fine Open Source products
 *
 * @domain `conftest.dev`
 *
 * @install `pkgx conftest.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.conftestdev
 * console.log(pkg.name)        // "conftest"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/conftest-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const conftestdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'conftest' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/conftest.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'conftest.dev' as const,
  fullPath: 'conftest.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx conftest.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ConftestdevPackage = typeof conftestdevPackage
