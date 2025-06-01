/**
 * **convco** - Crafters of fine Open Source products
 *
 * @domain `convco.github.io`
 *
 * @install `pkgx convco.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.convcogithubio
 * console.log(pkg.name)        // "convco"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/convco-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const convcogithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'convco' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/convco.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'convco.github.io' as const,
  fullPath: 'convco.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx convco.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ConvcogithubioPackage = typeof convcogithubioPackage
