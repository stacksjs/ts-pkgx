/**
 * **libomp** - Crafters of fine Open Source products
 *
 * @domain `openmp.llvm.org`
 *
 * @install `pkgx openmp.llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openmpllvmorg
 * console.log(pkg.name)        // "libomp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openmp-llvm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openmpllvmorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libomp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openmp.llvm.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openmp.llvm.org' as const,
  fullPath: 'openmp.llvm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openmp.llvm.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenmpllvmorgPackage = typeof openmpllvmorgPackage
