/**
 * **borgbackup.org** - Crafters of fine Open Source products
 *
 * @domain `borgbackup.org`
 *
 * @install `pkgx borgbackup.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.borgbackuporg
 * console.log(pkg.name)        // "borgbackup.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/borgbackup-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const borgbackuporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'borgbackup.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/borgbackup.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'borgbackup.org' as const,
  fullPath: 'borgbackup.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx borgbackup.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BorgbackuporgPackage = typeof borgbackuporgPackage
