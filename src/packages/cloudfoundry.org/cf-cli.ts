/**
 * **cf-cli** - Package from pantry: cloudfoundry.org/cf-cli
 *
 * @domain `cloudfoundry.org/cf-cli`
 *
 * @install `launchpad install cloudfoundry.org/cf-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cloudfoundryorgcfcli
 * console.log(pkg.name)        // "cf-cli"
 * console.log(pkg.description) // "Package from pantry: cloudfoundry.org/cf-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudfoundry-org/cf-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudfoundryorgcfcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cf-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudfoundry.org/cf-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cloudfoundry.org/cf-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cloudfoundry.org/cf-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cloudfoundry.org/cf-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cloudfoundry.org/cf-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cloudfoundry.org/cf-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CloudfoundryorgcfcliPackage = typeof cloudfoundryorgcfcliPackage
