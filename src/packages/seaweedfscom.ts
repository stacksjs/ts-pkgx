/**
 * **seaweedfs.com** - Package from pantry: seaweedfs.com
 *
 * @domain `seaweedfs.com`
 *
 * @install `launchpad install seaweedfs.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.seaweedfscom
 * console.log(pkg.name)        // "seaweedfs.com"
 * console.log(pkg.description) // "Package from pantry: seaweedfs.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/seaweedfs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const seaweedfscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'seaweedfs.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'seaweedfs.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: seaweedfs.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install seaweedfs.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +seaweedfs.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install seaweedfs.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/seaweedfs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SeaweedfscomPackage = typeof seaweedfscomPackage
