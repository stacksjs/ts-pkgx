/**
 * **libcxx.llvm.org** - Package from pantry: libcxx.llvm.org
 *
 * @domain `libcxx.llvm.org`
 *
 * @install `launchpad install libcxx.llvm.org`
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libcxx.llvm.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libcxx.llvm.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libcxx.llvm.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libcxx.llvm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibcxxllvmorgPackage = typeof libcxxllvmorgPackage
