/**
 * **pygmentize** - Pygments is a generic syntax highlighter written in Python
 *
 * @domain `pygments.org`
 * @programs `pygmentize`
 * @version `2.19.2` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pygmentize`
 * @name `pygmentize`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pygmentize
 * // Or access via domain
 * const samePkg = pantry.pygmentsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pygmentize"
 * console.log(pkg.description) // "Pygments is a generic syntax highlighter writte..."
 * console.log(pkg.programs)    // ["pygmentize"]
 * console.log(pkg.versions[0]) // "2.19.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pygments-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pygmentizePackage = {
  /**
   * The display name of this package.
   */
  name: 'pygmentize' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pygments.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pygments is a generic syntax highlighter written in Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pygments.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pygmentize' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pygmentize',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.19.2',
    '2.19.1',
    '2.19.0',
    '2.18.0',
    '2.17.2',
    '2.17.1',
    '2.17.0',
    '2.15.0',
    '2.14.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pygmentize -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pygmentize' as const,
}

export type PygmentizePackage = typeof pygmentizePackage
