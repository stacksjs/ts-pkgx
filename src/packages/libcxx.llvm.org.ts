/**
 * **libcxx.llvm.org** - Crafters of fine Open Source products
 *
 * @domain `libcxx.llvm.org`
 *
 * @install `pkgx libcxx.llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libcxxllvmorg
 * console.log(pkg.name)        // "libcxx.llvm.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libcxx-llvm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libcxxllvmorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcxx.llvm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libcxx.llvm.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libcxx.llvm.org' as const,
  fullPath: 'libcxx.llvm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libcxx.llvm.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibcxxllvmorgPackage = typeof libcxxllvmorgPackage
