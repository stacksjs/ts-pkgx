/**
 * **bash** - Package from pantry: gnu.org/bash
 *
 * @domain `gnu.org/bash`
 *
 * @install `launchpad install gnu.org/bash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgbash
 * console.log(pkg.name)        // "bash"
 * console.log(pkg.description) // "Package from pantry: gnu.org/bash"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bash.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgbashPackage = {
  /**
   * The display name of this package.
   */
  name: 'bash' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/bash' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/bash' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/bash' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/bash -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/bash' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bash/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgbashPackage = typeof gnuorgbashPackage
