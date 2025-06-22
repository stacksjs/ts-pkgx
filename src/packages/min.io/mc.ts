/**
 * **mc** - Package from pantry: min.io/mc
 *
 * @domain `min.io/mc`
 *
 * @install `launchpad install min.io/mc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.miniomc
 * console.log(pkg.name)        // "mc"
 * console.log(pkg.description) // "Package from pantry: min.io/mc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/min-io/mc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const miniomcPackage = {
  /**
   * The display name of this package.
   */
  name: 'mc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'min.io/mc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: min.io/mc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install min.io/mc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +min.io/mc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install min.io/mc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/min.io/mc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MiniomcPackage = typeof miniomcPackage
