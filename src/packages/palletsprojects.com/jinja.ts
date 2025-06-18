/**
 * **python-jinja** - A very fast and expressive template engine.
 *
 * @domain `palletsprojects.com/jinja`
 * @version `3.1.6` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +palletsprojects.com/jinja -- $SHELL -i`
 * @aliases `python-jinja`
 * @dependencies `python.org>=3.11`, `markupsafe.palletsprojects.com>=2.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pythonjinja
 * // Or access via domain
 * const samePkg = pantry.palletsprojectscomjinja
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jinja"
 * console.log(pkg.description) // "A very fast and expressive template engine."
 * console.log(pkg.versions[0]) // "3.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/palletsprojects-com/jinja.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonjinjaPackage = {
  /**
   * The display name of this package.
   */
  name: 'jinja' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'palletsprojects.com/jinja' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A very fast and expressive template engine.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/palletsprojects.com/jinja/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pallets/jinja' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +palletsprojects.com/jinja -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
    'markupsafe.palletsprojects.com>=2.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.6',
    '3.1.5',
    '3.1.4',
    '3.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'python-jinja',
  ] as const,
}

export type PythonjinjaPackage = typeof pythonjinjaPackage
