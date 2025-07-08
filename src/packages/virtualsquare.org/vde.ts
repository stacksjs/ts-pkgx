/**
 * **vde** - Package from pantry: virtualsquare.org/vde
 *
 * @domain `virtualsquare.org/vde`
 *
 * @install `launchpad install virtualsquare.org/vde`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.virtualsquareorgvde
 * console.log(pkg.name)        // "vde"
 * console.log(pkg.description) // "Package from pantry: virtualsquare.org/vde"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/virtualsquare-org/vde.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const virtualsquareorgvdePackage = {
  /**
   * The display name of this package.
   */
  name: 'vde' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'virtualsquare.org/vde' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: virtualsquare.org/vde' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install virtualsquare.org/vde' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +virtualsquare.org/vde -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install virtualsquare.org/vde' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/virtualsquare.org/vde/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VirtualsquareorgvdePackage = typeof virtualsquareorgvdePackage
