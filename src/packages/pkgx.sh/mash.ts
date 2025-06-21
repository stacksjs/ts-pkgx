/**
 * **mash** - Package from pantry: pkgx.sh/mash
 *
 * @domain `pkgx.sh/mash`
 *
 * @install `launchpad install pkgx.sh/mash`
 * @dependencies `pkgx.sh^1.1,^2`, `gnu.org/bash`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxshmash
 * console.log(pkg.name)        // "mash"
 * console.log(pkg.description) // "Package from pantry: pkgx.sh/mash"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/mash.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshmashPackage = {
  /**
   * The display name of this package.
   */
  name: 'mash' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh/mash' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pkgx.sh/mash' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pkgx.sh/mash' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1.1,^2',
    'gnu.org/bash',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/mash/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PkgxshmashPackage = typeof pkgxshmashPackage
