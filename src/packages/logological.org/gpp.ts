/**
 * **gpp** - Package from pantry: logological.org/gpp
 *
 * @domain `logological.org/gpp`
 *
 * @install `launchpad install logological.org/gpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.logologicalorggpp
 * console.log(pkg.name)        // "gpp"
 * console.log(pkg.description) // "Package from pantry: logological.org/gpp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/logological-org/gpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const logologicalorggppPackage = {
  /**
   * The display name of this package.
   */
  name: 'gpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'logological.org/gpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: logological.org/gpp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install logological.org/gpp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +logological.org/gpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install logological.org/gpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/logological.org/gpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LogologicalorggppPackage = typeof logologicalorggppPackage
