/**
 * **musl.libc.org** - Crafters of fine Open Source products
 *
 * @domain `musl.libc.org`
 *
 * @install `pkgx musl.libc.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musllibcorg
 * console.log(pkg.name)        // "musl.libc.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musl-libc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musllibcorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'musl.libc.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/musl.libc.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musl.libc.org' as const,
  fullPath: 'musl.libc.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx musl.libc.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MusllibcorgPackage = typeof musllibcorgPackage
