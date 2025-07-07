/**
 * **xerces-c** - Package from pantry: xerces.apache.org/xerces-c
 *
 * @domain `xerces.apache.org/xerces-c`
 *
 * @install `launchpad install xerces.apache.org/xerces-c`
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xercesapacheorgxercesc
 * console.log(pkg.name)        // "xerces-c"
 * console.log(pkg.description) // "Package from pantry: xerces.apache.org/xerces-c"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xerces-apache-org/xerces-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xercesapacheorgxercescPackage = {
  /**
   * The display name of this package.
   */
  name: 'xerces-c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xerces.apache.org/xerces-c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xerces.apache.org/xerces-c' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xerces.apache.org/xerces-c' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +xerces.apache.org/xerces-c -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install xerces.apache.org/xerces-c' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xerces.apache.org/xerces-c/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XercesapacheorgxercescPackage = typeof xercesapacheorgxercescPackage
