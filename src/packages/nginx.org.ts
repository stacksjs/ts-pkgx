/**
 * **nginx** - Crafters of fine Open Source products
 *
 * @domain `nginx.org`
 *
 * @install `pkgx nginx.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nginxorg
 * console.log(pkg.name)        // "nginx"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nginx-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nginxorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nginx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nginx.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nginx.org' as const,
  fullPath: 'nginx.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nginx.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NginxorgPackage = typeof nginxorgPackage
