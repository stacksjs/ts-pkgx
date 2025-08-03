/**
 * **driftctl** - Package from pantry: snyk.io/driftctl
 *
 * @domain `snyk.io/driftctl`
 *
 * @install `launchpad install snyk.io/driftctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.snykiodriftctl
 * console.log(pkg.name)        // "driftctl"
 * console.log(pkg.description) // "Package from pantry: snyk.io/driftctl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/snyk-io/driftctl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const snykiodriftctlPackage = {
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
  description: 'Package from pantry: snyk.io/driftctl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install snyk.io/driftctl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +snyk.io/driftctl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install snyk.io/driftctl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/snyk.io/driftctl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SnykiodriftctlPackage = typeof snykiodriftctlPackage
