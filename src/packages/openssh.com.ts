/**
 * **openssh.com** - Crafters of fine Open Source products
 *
 * @domain `openssh.com`
 *
 * @install `pkgx openssh.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensshcom
 * console.log(pkg.name)        // "openssh.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openssh-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensshcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'openssh.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openssh.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openssh.com' as const,
  fullPath: 'openssh.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openssh.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpensshcomPackage = typeof opensshcomPackage
