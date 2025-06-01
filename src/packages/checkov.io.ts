/**
 * **checkov** - Crafters of fine Open Source products
 *
 * @domain `checkov.io`
 *
 * @install `pkgx checkov.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.checkovio
 * console.log(pkg.name)        // "checkov"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/checkov-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const checkovioPackage = {
  /**
   * The display name of this package.
   */
  name: 'checkov' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/checkov.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'checkov.io' as const,
  fullPath: 'checkov.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx checkov.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CheckovioPackage = typeof checkovioPackage
