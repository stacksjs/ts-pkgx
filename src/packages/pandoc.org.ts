/**
 * **pandoc** - Crafters of fine Open Source products
 *
 * @domain `pandoc.org`
 *
 * @install `pkgx pandoc.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pandocorg
 * console.log(pkg.name)        // "pandoc"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pandoc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pandocorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pandoc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pandoc.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pandoc.org' as const,
  fullPath: 'pandoc.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pandoc.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PandocorgPackage = typeof pandocorgPackage
