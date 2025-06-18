/**
 * **openmp** - pkgx package
 *
 * @domain `llvm.org/openmp`
 *
 * @install `pkgx llvm.org/openmp`
 * @name `openmp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.openmp
 * // Or access via domain
 * const samePkg = pantry.llvmorgopenmp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openmp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/llvm-org/openmp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openmpPackage = {
  /**
   * The display name of this package.
   */
  name: 'openmp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'llvm.org/openmp' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx llvm.org/openmp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'llvm.org/openmp' as const,
}

export type OpenmpPackage = typeof openmpPackage
