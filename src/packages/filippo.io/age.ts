/**
 * **age** - Package from pantry: filippo.io/age
 *
 * @domain `filippo.io/age`
 *
 * @install `launchpad install filippo.io/age`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.filippoioage
 * console.log(pkg.name)        // "age"
 * console.log(pkg.description) // "Package from pantry: filippo.io/age"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/filippo-io/age.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const filippoioagePackage = {
  /**
   * The display name of this package.
   */
  name: 'age' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'filippo.io/age' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: filippo.io/age' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install filippo.io/age' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +filippo.io/age -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install filippo.io/age' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/filippo.io/age/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FilippoioagePackage = typeof filippoioagePackage
