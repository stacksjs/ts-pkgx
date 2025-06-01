/**
 * **duk** - Crafters of fine Open Source products
 *
 * @domain `duktape.org`
 *
 * @install `pkgx duktape.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.duktapeorg
 * console.log(pkg.name)        // "duk"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/duktape-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const duktapeorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'duk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/duktape.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'duktape.org' as const,
  fullPath: 'duktape.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx duktape.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DuktapeorgPackage = typeof duktapeorgPackage
