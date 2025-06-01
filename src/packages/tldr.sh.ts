/**
 * **tldr** - Crafters of fine Open Source products
 *
 * @domain `tldr.sh`
 *
 * @install `pkgx tldr.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tldrsh
 * console.log(pkg.name)        // "tldr"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tldr-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tldrshPackage = {
  /**
   * The display name of this package.
   */
  name: 'tldr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tldr.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tldr.sh' as const,
  fullPath: 'tldr.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tldr.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TldrshPackage = typeof tldrshPackage
