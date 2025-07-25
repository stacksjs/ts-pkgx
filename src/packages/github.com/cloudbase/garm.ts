/**
 * **cloudbase/garm** - GitHub Actions Runner Manager
 *
 * @domain `github.com/cloudbase/garm`
 * @programs `garm`, `garm-cli`
 * @version `0.1.6` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/cloudbase/garm`
 * @name `cloudbase/garm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cloudbasegarm
 * // Or access via domain
 * const samePkg = pantry.githubcomcloudbasegarm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cloudbase/garm"
 * console.log(pkg.description) // "GitHub Actions Runner Manager"
 * console.log(pkg.programs)    // ["garm", "garm-cli"]
 * console.log(pkg.versions[0]) // "0.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cloudbase/garm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudbasegarmPackage = {
  /**
   * The display name of this package.
   */
  name: 'cloudbase/garm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cloudbase/garm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GitHub Actions Runner Manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cloudbase/garm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cloudbase/garm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'garm',
    'garm-cli',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.6',
    '0.1.5',
    '0.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cloudbase/garm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cloudbase/garm' as const,
}

export type CloudbasegarmPackage = typeof cloudbasegarmPackage
