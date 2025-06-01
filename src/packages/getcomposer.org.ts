/**
 * **composer** - Crafters of fine Open Source products
 *
 * @domain `getcomposer.org`
 *
 * @install `pkgx getcomposer.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getcomposerorg
 * console.log(pkg.name)        // "composer"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getcomposer-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getcomposerorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'composer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/getcomposer.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getcomposer.org' as const,
  fullPath: 'getcomposer.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx getcomposer.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GetcomposerorgPackage = typeof getcomposerorgPackage
