/**
 * **rexi** - Terminal UI for Regex Testing
 *
 * @domain `github.com/royreznik/rexi`
 * @programs `rexi`
 * @version `1.2.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rexi`
 * @name `rexi`
 * @dependencies `pkgx.sh^1`, `python.org>=3.8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rexi
 * // Or access via domain
 * const samePkg = pantry.githubcomroyreznikrexi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rexi"
 * console.log(pkg.description) // "Terminal UI for Regex Testing"
 * console.log(pkg.programs)    // ["rexi"]
 * console.log(pkg.versions[0]) // "1.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/royreznik/rexi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rexiPackage = {
  /**
   * The display name of this package.
   */
  name: 'rexi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/royreznik/rexi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terminal UI for Regex Testing' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/royreznik/rexi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install rexi' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rexi',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org>=3.8',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.0',
    '1.1.4',
    '1.1.3',
    '1.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RexiPackage = typeof rexiPackage
