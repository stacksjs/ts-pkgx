/**
 * **perl.org** - Crafters of fine Open Source products
 *
 * @domain `perl.org`
 *
 * @install `pkgx perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.perlorg
 * console.log(pkg.name)        // "perl.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/perl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const perlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'perl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/perl.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'perl.org' as const,
  fullPath: 'perl.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx perl.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PerlorgPackage = typeof perlorgPackage
