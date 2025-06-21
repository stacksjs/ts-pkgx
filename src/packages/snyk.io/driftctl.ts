/**
 * **driftctl** - Detect, track and alert on infrastructure drift
 *
 * @domain `snyk.io/driftctl`
 * @programs `driftctl`
 * @version `0.40.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install driftctl`
 * @name `driftctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.driftctl
 * // Or access via domain
 * const samePkg = pantry.snykiodriftctl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "driftctl"
 * console.log(pkg.description) // "Detect, track and alert on infrastructure drift"
 * console.log(pkg.programs)    // ["driftctl"]
 * console.log(pkg.versions[0]) // "0.40.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/snyk-io/driftctl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const driftctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'driftctl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'snyk.io/driftctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Detect, track and alert on infrastructure drift' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/snyk.io/driftctl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install driftctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'driftctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.40.0',
    '0.39.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type DriftctlPackage = typeof driftctlPackage
