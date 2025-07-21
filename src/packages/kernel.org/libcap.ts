/**
 * **libcap** - Package from pantry: kernel.org/libcap
 *
 * @domain `kernel.org/libcap`
 *
 * @install `launchpad install kernel.org/libcap`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kernelorglibcap
 * console.log(pkg.name)        // "libcap"
 * console.log(pkg.description) // "Package from pantry: kernel.org/libcap"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kernel-org/libcap.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kernelorglibcapPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcap' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kernel.org/libcap' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kernel.org/libcap' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kernel.org/libcap' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kernel.org/libcap -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kernel.org/libcap' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kernel.org/libcap/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KernelorglibcapPackage = typeof kernelorglibcapPackage
