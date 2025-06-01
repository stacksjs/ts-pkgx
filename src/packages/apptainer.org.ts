/**
 * **apptainer.org** - Crafters of fine Open Source products
 *
 * @domain `apptainer.org`
 *
 * @install `pkgx apptainer.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apptainerorg
 * console.log(pkg.name)        // "apptainer.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apptainer-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apptainerorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'apptainer.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/apptainer.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apptainer.org' as const,
  fullPath: 'apptainer.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx apptainer.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ApptainerorgPackage = typeof apptainerorgPackage
