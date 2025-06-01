/**
 * **elfutils.org** - Crafters of fine Open Source products
 *
 * @domain `elfutils.org`
 *
 * @install `pkgx elfutils.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elfutilsorg
 * console.log(pkg.name)        // "elfutils.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elfutils-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elfutilsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'elfutils.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/elfutils.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elfutils.org' as const,
  fullPath: 'elfutils.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx elfutils.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ElfutilsorgPackage = typeof elfutilsorgPackage
