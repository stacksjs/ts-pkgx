/**
 * **llvm.org/clang-format** - pkgx package
 *
 * @domain `llvm.org/clang/format`
 *
 * @install `pkgx llvm.org/clang-format`
 * @name `clang-format`
 * @aliases `llvm.org/clang-format`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.llvmorgclangformat
 * // Or access via domain
 * const samePkg = pantry.llvmorgclangformat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "clang-format"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/llvm-org/clang/format.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const llvmorgclangformatPackage = {
  /**
   * The display name of this package.
   */
  name: 'clang-format' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'llvm.org/clang/format' as const,
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
  installCommand: 'pkgx llvm.org/clang-format' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'llvm.org/clang-format',
  ] as const,
  fullPath: 'llvm.org/clang-format' as const,
}

export type LlvmorgclangformatPackage = typeof llvmorgclangformatPackage
