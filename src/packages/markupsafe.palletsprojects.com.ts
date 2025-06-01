/**
 * **markupsafe.palletsprojects.com** - Crafters of fine Open Source products
 *
 * @domain `markupsafe.palletsprojects.com`
 *
 * @install `pkgx markupsafe.palletsprojects.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.markupsafepalletsprojectscom
 * console.log(pkg.name)        // "markupsafe.palletsprojects.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/markupsafe-palletsprojects-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const markupsafepalletsprojectscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'markupsafe.palletsprojects.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/markupsafe.palletsprojects.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'markupsafe.palletsprojects.com' as const,
  fullPath: 'markupsafe.palletsprojects.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx markupsafe.palletsprojects.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MarkupsafepalletsprojectscomPackage = typeof markupsafepalletsprojectscomPackage
