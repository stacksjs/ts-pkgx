/**
 * **phpMyAdmin** - Crafters of fine Open Source products
 *
 * @domain `phpmyadmin.net`
 *
 * @install `pkgx phpmyadmin.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.phpmyadminnet
 * console.log(pkg.name)        // "phpMyAdmin"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/phpmyadmin-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const phpmyadminnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'phpMyAdmin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/phpmyadmin.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'phpmyadmin.net' as const,
  fullPath: 'phpmyadmin.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx phpmyadmin.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PhpmyadminnetPackage = typeof phpmyadminnetPackage
