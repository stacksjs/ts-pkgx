/**
 * **llvm.org** - Crafters of fine Open Source products
 *
 * @domain `llvm.org`
 *
 * @install `pkgx llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.llvmorg
 * console.log(pkg.name)        // "llvm.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/llvm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const llvmorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'llvm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/llvm.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'llvm.org' as const,
  fullPath: 'llvm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx llvm.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LlvmorgPackage = typeof llvmorgPackage
