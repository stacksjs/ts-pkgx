/**
 * **oauth2-proxy** - Crafters of fine Open Source products
 *
 * @domain `oauth2-proxy.github.io`
 *
 * @install `pkgx oauth2-proxy.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oauth2proxygithubio
 * console.log(pkg.name)        // "oauth2-proxy"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oauth2-proxy-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oauth2proxygithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'oauth2-proxy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/oauth2-proxy.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oauth2-proxy.github.io' as const,
  fullPath: 'oauth2-proxy.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx oauth2-proxy.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Oauth2proxygithubioPackage = typeof oauth2proxygithubioPackage
