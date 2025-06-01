/**
 * **php.net** - Crafters of fine Open Source products
 *
 * @domain `php.net`
 *
 * @install `pkgx php.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.phpnet
 * console.log(pkg.name)        // "php.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/php-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const phpnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'php.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/php.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'php.net' as const,
  fullPath: 'php.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx php.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PhpnetPackage = typeof phpnetPackage
