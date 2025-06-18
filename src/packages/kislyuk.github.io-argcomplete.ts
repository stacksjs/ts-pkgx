/**
 * **argcomplete** - Python and tab completion, better together.
 *
 * @domain `kislyuk.github.io/argcomplete`
 * @programs `activate-global-python-argcomplete`, `register-python-argcomplete`, `python-argcomplete-check-easy-install-script`
 * @version `3.6.2` (10 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/kislyuk-github-io/argcomplete.md
 *
 * @install `sh <(curl https://pkgx.sh) +kislyuk.github.io/argcomplete -- $SHELL -i`
 * @aliases `argcomplete`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.argcomplete
 * // Or access via domain
 * const samePkg = pantry.kislyukgithubioargcomplete
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kislyuk.github.io/argcomplete"
 * console.log(pkg.description) // "Python and tab completion, better together."
 * console.log(pkg.programs)    // ["activate-global-python-argcomplete", "register-python-argcomplete", ...]
 * console.log(pkg.versions[0]) // "3.6.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kislyuk-github-io/argcomplete.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argcompletePackage = {
  /**
   * The display name of this package.
   */
  name: 'kislyuk.github.io/argcomplete' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kislyuk.github.io/argcomplete' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python and tab completion, better together.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kislyuk.github.io/argcomplete/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +kislyuk.github.io/argcomplete -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'activate-global-python-argcomplete',
    'register-python-argcomplete',
    'python-argcomplete-check-easy-install-script',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.3',
    '3.5.2',
    '3.5.1',
    '3.5.0',
    '3.4.0',
    '3.3.0',
    '3.2.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'argcomplete',
  ] as const,
  fullPath: 'kislyuk.github.io/argcomplete' as const,
}

export type ArgcompletePackage = typeof argcompletePackage
