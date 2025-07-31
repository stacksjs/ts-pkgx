/**
 * **openmp.llvm.org** - Package from pantry: openmp.llvm.org
 *
 * @domain `openmp.llvm.org`
 *
 * @install `launchpad install openmp.llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openmpllvmorg
 * console.log(pkg.name)        // "openmp.llvm.org"
 * console.log(pkg.description) // "Package from pantry: openmp.llvm.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openmp-llvm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openmpllvmorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openmp.llvm.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openmp.llvm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openmp.llvm.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openmp.llvm.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openmp.llvm.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openmp.llvm.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openmp.llvm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenmpllvmorgPackage = typeof openmpllvmorgPackage
