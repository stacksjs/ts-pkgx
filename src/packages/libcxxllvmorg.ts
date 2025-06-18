/**
 * **libcxx.llvm.org** - Package from pantry: libcxx.llvm.org
 *
 * @domain `libcxx.llvm.org`
 *
 * @install `launchpad install libcxx.llvm.org`
 * @dependencies `cmake.org>=3<3.29`, `ninja-build.org^1`, `python.org>=3<3.12`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libcxxllvmorg
 * console.log(pkg.name)        // "libcxx.llvm.org"
 * console.log(pkg.description) // "Package from pantry: libcxx.llvm.org"
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
   * The canonical domain name for this package.
   */
  domain: 'libcxx.llvm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libcxx.llvm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libcxx.llvm.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org>=3<3.29',
    'ninja-build.org^1',
    'python.org>=3<3.12',
    'llvm.org',
    'llvm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libcxx.llvm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibcxxllvmorgPackage = typeof libcxxllvmorgPackage
