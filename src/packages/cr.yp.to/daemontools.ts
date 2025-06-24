/**
 * **daemontools** - Package from pantry: cr.yp.to/daemontools
 *
 * @domain `cr.yp.to/daemontools`
 *
 * @install `launchpad install cr.yp.to/daemontools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cryptodaemontools
 * console.log(pkg.name)        // "daemontools"
 * console.log(pkg.description) // "Package from pantry: cr.yp.to/daemontools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cr-yp-to/daemontools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cryptodaemontoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'daemontools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cr.yp.to/daemontools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cr.yp.to/daemontools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cr.yp.to/daemontools' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cr.yp.to/daemontools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cr.yp.to/daemontools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cr.yp.to/daemontools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CryptodaemontoolsPackage = typeof cryptodaemontoolsPackage
