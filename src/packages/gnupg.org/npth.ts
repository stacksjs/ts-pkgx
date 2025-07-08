/**
 * **npth** - Package from pantry: gnupg.org/npth
 *
 * @domain `gnupg.org/npth`
 *
 * @install `launchpad install gnupg.org/npth`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorgnpth
 * console.log(pkg.name)        // "npth"
 * console.log(pkg.description) // "Package from pantry: gnupg.org/npth"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/npth.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorgnpthPackage = {
  /**
   * The display name of this package.
   */
  name: 'npth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/npth' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org/npth' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org/npth' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/npth -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org/npth' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/npth/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnupgorgnpthPackage = typeof gnupgorgnpthPackage
