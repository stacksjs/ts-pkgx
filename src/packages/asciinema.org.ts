/**
 * **asciinema** - Crafters of fine Open Source products
 *
 * @domain `asciinema.org`
 *
 * @install `pkgx asciinema.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.asciinemaorg
 * console.log(pkg.name)        // "asciinema"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/asciinema-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciinemaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciinema' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/asciinema.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'asciinema.org' as const,
  fullPath: 'asciinema.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx asciinema.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AsciinemaorgPackage = typeof asciinemaorgPackage
