/**
 * **cloudflare.com** - Go home.
 *
 * @domain `cloudflare.com`
 *
 * @install `pkgx cloudflare.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cloudflarecom
 * console.log(pkg.name)        // "cloudflare.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudflare-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudflarecomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cloudflare.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudflare.com' as const,
  fullPath: 'cloudflare.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cloudflare.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CloudflarecomPackage = typeof cloudflarecomPackage
