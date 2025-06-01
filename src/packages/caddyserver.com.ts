/**
 * **caddy** - Crafters of fine Open Source products
 *
 * @domain `caddyserver.com`
 *
 * @install `pkgx caddyserver.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.caddyservercom
 * console.log(pkg.name)        // "caddy"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/caddyserver-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caddyservercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'caddy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/caddyserver.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'caddyserver.com' as const,
  fullPath: 'caddyserver.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx caddyserver.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CaddyservercomPackage = typeof caddyservercomPackage
