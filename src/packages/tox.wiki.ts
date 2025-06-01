/**
 * **tox** - Crafters of fine Open Source products
 *
 * @domain `tox.wiki`
 *
 * @install `pkgx tox.wiki`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.toxwiki
 * console.log(pkg.name)        // "tox"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tox-wiki.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const toxwikiPackage = {
  /**
   * The display name of this package.
   */
  name: 'tox' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tox.wiki/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tox.wiki' as const,
  fullPath: 'tox.wiki' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tox.wiki' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ToxwikiPackage = typeof toxwikiPackage
