/**
 * **doctave.com** - Package from pantry: doctave.com
 *
 * @domain `doctave.com`
 *
 * @install `launchpad install doctave.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.doctavecom
 * console.log(pkg.name)        // "doctave.com"
 * console.log(pkg.description) // "Package from pantry: doctave.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/doctave-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const doctavecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'doctave.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'doctave.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: doctave.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install doctave.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +doctave.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install doctave.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/doctave.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DoctavecomPackage = typeof doctavecomPackage
