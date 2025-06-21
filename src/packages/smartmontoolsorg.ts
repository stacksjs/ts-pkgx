/**
 * **smartmontools.org** - Package from pantry: smartmontools.org
 *
 * @domain `smartmontools.org`
 *
 * @install `launchpad install smartmontools.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.smartmontoolsorg
 * console.log(pkg.name)        // "smartmontools.org"
 * console.log(pkg.description) // "Package from pantry: smartmontools.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/smartmontools-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const smartmontoolsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'smartmontools.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'smartmontools.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: smartmontools.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install smartmontools.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/smartmontools.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SmartmontoolsorgPackage = typeof smartmontoolsorgPackage
