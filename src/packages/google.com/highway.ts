/**
 * **highway** - Package from pantry: google.com/highway
 *
 * @domain `google.com/highway`
 *
 * @install `launchpad install google.com/highway`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomhighway
 * console.log(pkg.name)        // "highway"
 * console.log(pkg.description) // "Package from pantry: google.com/highway"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/highway.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomhighwayPackage = {
  /**
   * The display name of this package.
   */
  name: 'highway' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/highway' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/highway' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/highway' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/highway -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/highway' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/highway/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglecomhighwayPackage = typeof googlecomhighwayPackage
