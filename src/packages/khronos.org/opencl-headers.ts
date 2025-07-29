/**
 * **opencl-headers** - Package from pantry: khronos.org/opencl-headers
 *
 * @domain `khronos.org/opencl-headers`
 *
 * @install `launchpad install khronos.org/opencl-headers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.khronosorgopenclheaders
 * console.log(pkg.name)        // "opencl-headers"
 * console.log(pkg.description) // "Package from pantry: khronos.org/opencl-headers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/opencl-headers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosorgopenclheadersPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencl-headers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/opencl-headers' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: khronos.org/opencl-headers' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install khronos.org/opencl-headers' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +khronos.org/opencl-headers -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install khronos.org/opencl-headers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/opencl-headers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KhronosorgopenclheadersPackage = typeof khronosorgopenclheadersPackage
