/**
 * **pygments.org** - Package from pantry: pygments.org
 *
 * @domain `pygments.org`
 *
 * @install `launchpad install pygments.org`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pygmentsorg
 * console.log(pkg.name)        // "pygments.org"
 * console.log(pkg.description) // "Package from pantry: pygments.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pygments-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pygmentsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pygments.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pygments.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pygments.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pygments.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pygments.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pygments.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pygments.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PygmentsorgPackage = typeof pygmentsorgPackage
