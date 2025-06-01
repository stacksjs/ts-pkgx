/**
 * **xray-core** - Crafters of fine Open Source products
 *
 * @domain `xtls.github.io`
 *
 * @install `pkgx xtls.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xtlsgithubio
 * console.log(pkg.name)        // "xray-core"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xtls-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xtlsgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'xray-core' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/xtls.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xtls.github.io' as const,
  fullPath: 'xtls.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx xtls.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XtlsgithubioPackage = typeof xtlsgithubioPackage
