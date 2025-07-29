/**
 * **ctop.sh** - Package from pantry: ctop.sh
 *
 * @domain `ctop.sh`
 *
 * @install `launchpad install ctop.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ctopsh
 * console.log(pkg.name)        // "ctop.sh"
 * console.log(pkg.description) // "Package from pantry: ctop.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ctop-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ctopshPackage = {
  /**
   * The display name of this package.
   */
  name: 'ctop.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ctop.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ctop.sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ctop.sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ctop.sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ctop.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ctop.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CtopshPackage = typeof ctopshPackage
