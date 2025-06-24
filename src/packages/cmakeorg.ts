/**
 * **cmake.org** - Package from pantry: cmake.org
 *
 * @domain `cmake.org`
 *
 * @install `launchpad install cmake.org`
 * @dependencies `curl.se>=5<8.13`, `zlib.net@1`, `sourceware.org/bzip2@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cmakeorg
 * console.log(pkg.name)        // "cmake.org"
 * console.log(pkg.description) // "Package from pantry: cmake.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cmake-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cmakeorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cmake.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cmake.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cmake.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cmake.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cmake.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cmake.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se>=5<8.13',
    'zlib.net@1',
    'sourceware.org/bzip2@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cmake.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CmakeorgPackage = typeof cmakeorgPackage
