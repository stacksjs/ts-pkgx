/**
 * **cruft** - Crafters of fine Open Source products
 *
 * @domain `cruft.github.io`
 *
 * @install `pkgx cruft.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cruftgithubio
 * console.log(pkg.name)        // "cruft"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cruft-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cruftgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cruft' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cruft.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cruft.github.io' as const,
  fullPath: 'cruft.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cruft.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CruftgithubioPackage = typeof cruftgithubioPackage
