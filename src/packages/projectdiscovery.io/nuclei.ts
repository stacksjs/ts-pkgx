/**
 * **nuclei** - Package from pantry: projectdiscovery.io/nuclei
 *
 * @domain `projectdiscovery.io/nuclei`
 *
 * @install `launchpad install projectdiscovery.io/nuclei`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projectdiscoveryionuclei
 * console.log(pkg.name)        // "nuclei"
 * console.log(pkg.description) // "Package from pantry: projectdiscovery.io/nuclei"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/projectdiscovery-io/nuclei.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projectdiscoveryionucleiPackage = {
  /**
   * The display name of this package.
   */
  name: 'nuclei' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'projectdiscovery.io/nuclei' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: projectdiscovery.io/nuclei' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install projectdiscovery.io/nuclei' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/projectdiscovery.io/nuclei/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ProjectdiscoveryionucleiPackage = typeof projectdiscoveryionucleiPackage
