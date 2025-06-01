/**
 * **pygmentize** - Crafters of fine Open Source products
 *
 * @domain `pygments.org`
 *
 * @install `pkgx pygments.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pygmentsorg
 * console.log(pkg.name)        // "pygmentize"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pygments-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pygmentsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pygmentize' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pygments.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pygments.org' as const,
  fullPath: 'pygments.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pygments.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PygmentsorgPackage = typeof pygmentsorgPackage
