/**
 * **+libcxx.llvm.org -- $SHELL -i** - The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.
 *
 * @domain `libcxx.llvm.org`
 * @version `20.1.6` (40 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libcxx-llvm-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +libcxx.llvm.org -- $SHELL -i`
 * @aliases `+libcxx.llvm.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libcxxllvmorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.libcxxllvmorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libcxx.llvm.org"
 * console.log(pkg.description) // "The LLVM Project is a collection of modular and..."
 * console.log(pkg.versions[0]) // "20.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libcxx-llvm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libcxxllvmorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcxx.llvm.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libcxx.llvm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libcxx.llvm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libcxx.llvm.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20.1.6',
    '20.1.5',
    '20.1.4',
    '20.1.3',
    '20.1.2',
    '20.1.1',
    '20.1.0',
    '19.1.7',
    '19.1.6',
    '19.1.5',
    '19.1.4',
    '19.1.3',
    '19.1.2',
    '19.1.1',
    '19.1.0',
    '18.1.8',
    '18.1.7',
    '18.1.6',
    '18.1.4',
    '18.1.3',
    '18.1.2',
    '18.1.1',
    '17.0.6',
    '17.0.5',
    '17.0.4',
    '17.0.3',
    '17.0.2',
    '17.0.1',
    '16.0.6',
    '16.0.5',
    '16.0.4',
    '16.0.3',
    '16.0.2',
    '16.0.1',
    '15.0.7',
    '15.0.6',
    '14.0.6',
    '14.0.3',
    '13.0.1',
    '12.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+libcxx.llvm.org -- $SHELL -i',
  ] as const,
  fullPath: 'libcxx.llvm.org' as const,
}

export type LibcxxllvmorgSHELLiPackage = typeof libcxxllvmorgSHELLiPackage
