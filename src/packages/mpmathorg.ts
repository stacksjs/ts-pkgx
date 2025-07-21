/**
 * **mpmath.org** - Package from pantry: mpmath.org
 *
 * @domain `mpmath.org`
 *
 * @install `launchpad install mpmath.org`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mpmathorg
 * console.log(pkg.name)        // "mpmath.org"
 * console.log(pkg.description) // "Package from pantry: mpmath.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpmath-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpmathorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpmath.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpmath.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mpmath.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mpmath.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mpmath.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mpmath.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mpmath.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MpmathorgPackage = typeof mpmathorgPackage
