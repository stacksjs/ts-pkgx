/**
 * **argcomplete** - Package from pantry: kislyuk.github.io/argcomplete
 *
 * @domain `kislyuk.github.io/argcomplete`
 *
 * @install `launchpad install kislyuk.github.io/argcomplete`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kislyukgithubioargcomplete
 * console.log(pkg.name)        // "argcomplete"
 * console.log(pkg.description) // "Package from pantry: kislyuk.github.io/argcomplete"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kislyuk-github-io/argcomplete.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kislyukgithubioargcompletePackage = {
  /**
   * The display name of this package.
   */
  name: 'argcomplete' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kislyuk.github.io/argcomplete' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kislyuk.github.io/argcomplete' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kislyuk.github.io/argcomplete' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kislyuk.github.io/argcomplete -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kislyuk.github.io/argcomplete' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kislyuk.github.io/argcomplete/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KislyukgithubioargcompletePackage = typeof kislyukgithubioargcompletePackage
