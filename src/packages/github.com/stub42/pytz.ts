/**
 * **pytz** - Package from pantry: github.com/stub42/pytz
 *
 * @domain `github.com/stub42/pytz`
 *
 * @install `launchpad install github.com/stub42/pytz`
 * @dependencies `python.org~3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomstub42pytz
 * console.log(pkg.name)        // "pytz"
 * console.log(pkg.description) // "Package from pantry: github.com/stub42/pytz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/stub42/pytz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomstub42pytzPackage = {
  /**
   * The display name of this package.
   */
  name: 'pytz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/stub42/pytz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/stub42/pytz' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/stub42/pytz' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/stub42/pytz -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/stub42/pytz' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/stub42/pytz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomstub42pytzPackage = typeof githubcomstub42pytzPackage
