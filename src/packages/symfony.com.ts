/**
 * **symfony** - Crafters of fine Open Source products
 *
 * @domain `symfony.com`
 *
 * @install `pkgx symfony.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.symfonycom
 * console.log(pkg.name)        // "symfony"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/symfony-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const symfonycomPackage = {
  /**
   * The display name of this package.
   */
  name: 'symfony' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/symfony.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'symfony.com' as const,
  fullPath: 'symfony.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx symfony.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SymfonycomPackage = typeof symfonycomPackage
