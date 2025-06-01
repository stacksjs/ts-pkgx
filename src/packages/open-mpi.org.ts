/**
 * **open-mpi.org** - Crafters of fine Open Source products
 *
 * @domain `open-mpi.org`
 *
 * @install `pkgx open-mpi.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openmpiorg
 * console.log(pkg.name)        // "open-mpi.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/open-mpi-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openmpiorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'open-mpi.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/open-mpi.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'open-mpi.org' as const,
  fullPath: 'open-mpi.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx open-mpi.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenmpiorgPackage = typeof openmpiorgPackage
