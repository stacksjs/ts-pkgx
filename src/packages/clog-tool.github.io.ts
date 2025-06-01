/**
 * **clog** - Crafters of fine Open Source products
 *
 * @domain `clog-tool.github.io`
 *
 * @install `pkgx clog-tool.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.clogtoolgithubio
 * console.log(pkg.name)        // "clog"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/clog-tool-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const clogtoolgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'clog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/clog-tool.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'clog-tool.github.io' as const,
  fullPath: 'clog-tool.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx clog-tool.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ClogtoolgithubioPackage = typeof clogtoolgithubioPackage
