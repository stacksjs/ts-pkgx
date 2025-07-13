/**
 * **linux-headers** - Package from pantry: kernel.org/linux-headers
 *
 * @domain `kernel.org/linux-headers`
 *
 * @install `launchpad install kernel.org/linux-headers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kernelorglinuxheaders
 * console.log(pkg.name)        // "linux-headers"
 * console.log(pkg.description) // "Package from pantry: kernel.org/linux-headers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kernel-org/linux-headers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kernelorglinuxheadersPackage = {
  /**
   * The display name of this package.
   */
  name: 'linux-headers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kernel.org/linux-headers' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kernel.org/linux-headers' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kernel.org/linux-headers' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kernel.org/linux-headers -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kernel.org/linux-headers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kernel.org/linux-headers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KernelorglinuxheadersPackage = typeof kernelorglinuxheadersPackage
