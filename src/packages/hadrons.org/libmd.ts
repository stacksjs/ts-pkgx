/**
 * **libmd** - Package from pantry: hadrons.org/libmd
 *
 * @domain `hadrons.org/libmd`
 *
 * @install `launchpad install hadrons.org/libmd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hadronsorglibmd
 * console.log(pkg.name)        // "libmd"
 * console.log(pkg.description) // "Package from pantry: hadrons.org/libmd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hadrons-org/libmd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hadronsorglibmdPackage = {
  /**
   * The display name of this package.
   */
  name: 'libmd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hadrons.org/libmd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hadrons.org/libmd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hadrons.org/libmd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hadrons.org/libmd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hadrons.org/libmd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hadrons.org/libmd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HadronsorglibmdPackage = typeof hadronsorglibmdPackage
