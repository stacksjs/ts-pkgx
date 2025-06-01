/**
 * **mandoc.bsd.lv** - Crafters of fine Open Source products
 *
 * @domain `mandoc.bsd.lv`
 *
 * @install `pkgx mandoc.bsd.lv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mandocbsdlv
 * console.log(pkg.name)        // "mandoc.bsd.lv"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mandoc-bsd-lv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mandocbsdlvPackage = {
  /**
   * The display name of this package.
   */
  name: 'mandoc.bsd.lv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mandoc.bsd.lv/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mandoc.bsd.lv' as const,
  fullPath: 'mandoc.bsd.lv' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mandoc.bsd.lv' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MandocbsdlvPackage = typeof mandocbsdlvPackage
