/**
 * **unrar** - Crafters of fine Open Source products
 *
 * @domain `rarlab.com`
 *
 * @install `pkgx rarlab.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rarlabcom
 * console.log(pkg.name)        // "unrar"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rarlab-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rarlabcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'unrar' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rarlab.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rarlab.com' as const,
  fullPath: 'rarlab.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rarlab.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RarlabcomPackage = typeof rarlabcomPackage
