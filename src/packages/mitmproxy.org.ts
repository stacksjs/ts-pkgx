/**
 * **mitmproxy** - Crafters of fine Open Source products
 *
 * @domain `mitmproxy.org`
 *
 * @install `pkgx mitmproxy.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mitmproxyorg
 * console.log(pkg.name)        // "mitmproxy"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mitmproxy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mitmproxyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mitmproxy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mitmproxy.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mitmproxy.org' as const,
  fullPath: 'mitmproxy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mitmproxy.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MitmproxyorgPackage = typeof mitmproxyorgPackage
