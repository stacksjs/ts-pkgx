/**
 * **cpanm** - Crafters of fine Open Source products
 *
 * @domain `cpanmin.us`
 *
 * @install `pkgx cpanmin.us`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cpanminus
 * console.log(pkg.name)        // "cpanm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cpanmin-us.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cpanminusPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpanm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cpanmin.us/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cpanmin.us' as const,
  fullPath: 'cpanmin.us' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cpanmin.us' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CpanminusPackage = typeof cpanminusPackage
