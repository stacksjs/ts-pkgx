/**
 * **llvm.org** - Package from pantry: llvm.org
 *
 * @domain `llvm.org`
 *
 * @install `launchpad install llvm.org`
 * @dependencies `zlib.net^1`, `cmake.org>=3<3.29`, `ninja-build.org^1`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.llvmorg
 * console.log(pkg.name)        // "llvm.org"
 * console.log(pkg.description) // "Package from pantry: llvm.org"
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
  description: 'Package from pantry: llvm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install llvm.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'cmake.org>=3<3.29',
    'ninja-build.org^1',
    'python.org>=3<3.12',
    'crates.io/semverator',
    'crates.io/semverator',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/llvm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LlvmorgPackage = typeof llvmorgPackage
