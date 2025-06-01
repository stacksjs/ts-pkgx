/**
 * **clisp** - Crafters of fine Open Source products
 *
 * @domain `clisp.org`
 *
 * @install `pkgx clisp.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.clisporg
 * console.log(pkg.name)        // "clisp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/clisp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const clisporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'clisp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/clisp.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'clisp.org' as const,
  fullPath: 'clisp.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx clisp.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ClisporgPackage = typeof clisporgPackage
