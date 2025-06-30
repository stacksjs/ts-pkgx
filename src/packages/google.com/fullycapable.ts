/**
 * **fullycapable** - Package from pantry: google.com/fullycapable
 *
 * @domain `google.com/fullycapable`
 *
 * @install `launchpad install google.com/fullycapable`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomfullycapable
 * console.log(pkg.name)        // "fullycapable"
 * console.log(pkg.description) // "Package from pantry: google.com/fullycapable"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/fullycapable.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomfullycapablePackage = {
  /**
   * The display name of this package.
   */
  name: 'fullycapable' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/fullycapable' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/fullycapable' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/fullycapable' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/fullycapable -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/fullycapable' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/fullycapable/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglecomfullycapablePackage = typeof googlecomfullycapablePackage
