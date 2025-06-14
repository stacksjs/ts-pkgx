/**
 * **llvm.org** - The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.
 *
 * @domain `llvm.org`
 * @programs `lld`, `clang`, `clang++`, `cc`, `c++`, ... (+9 more)
 * @version `20.1.7` (43 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/llvm-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +llvm.org -- $SHELL -i`
 * @dependencies `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.llvmorg
 * console.log(pkg.name)        // "llvm.org"
 * console.log(pkg.description) // "The LLVM Project is a collection of modular and..."
 * console.log(pkg.programs)    // ["lld", "clang", ...]
 * console.log(pkg.versions[0]) // "20.1.7" (latest)
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
   * The canonical domain name for this package.
   */
  domain: 'llvm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/llvm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +llvm.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lld',
    'clang',
    'clang++',
    'cc',
    'c++',
    'cpp',
    'nm',
    'objcopy',
    'ranlib',
    'readelf',
    'strings',
    'strip',
    'llvm-profdata',
    'llvm-cov',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20.1.7',
    '20.1.6',
    '20.1.5',
    '20.1.4',
    '20.1.3',
    '20.1.2',
    '20.1.1',
    '20.1.0',
    '19.1.7',
    '19.1.6',
    '19.1.4',
    '19.1.3',
    '19.1.2',
    '19.1.1',
    '19.1.0',
    '18.1.8',
    '18.1.7',
    '18.1.6',
    '18.1.5',
    '18.1.4',
    '18.1.3',
    '18.1.2',
    '18.1.1',
    '18.1.0',
    '17.0.6',
    '17.0.5',
    '17.0.4',
    '17.0.3',
    '17.0.2',
    '17.0.1',
    '17.0.0',
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
  aliases: [] as const,
  fullPath: 'llvm.org' as const,
}

export type LlvmorgPackage = typeof llvmorgPackage
