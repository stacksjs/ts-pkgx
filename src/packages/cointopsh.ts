/**
 * **cointop.sh** - Package from pantry: cointop.sh
 *
 * @domain `cointop.sh`
 *
 * @install `launchpad install cointop.sh`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cointopsh
 * console.log(pkg.name)        // "cointop.sh"
 * console.log(pkg.description) // "Package from pantry: cointop.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cointop-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cointopshPackage = {
  /**
   * The display name of this package.
   */
  name: 'cointop.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cointop.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cointop.sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cointop.sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cointop.sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cointop.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cointop.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CointopshPackage = typeof cointopshPackage
