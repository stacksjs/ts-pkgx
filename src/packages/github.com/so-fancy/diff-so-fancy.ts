/**
 * **diff-so-fancy** - Good-lookin' diffs. Actually… nah… The best-lookin' diffs. :tada:
 *
 * @domain `github.com/so-fancy/diff-so-fancy`
 * @programs `diff-so-fancy`
 * @version `1.4.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install diff-so-fancy`
 * @name `diff-so-fancy`
 * @aliases `so-fancy/diff-so-fancy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.diffsofancy
 * // Or access via domain
 * const samePkg = pantry.githubcomsofancydiffsofancy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "diff-so-fancy"
 * console.log(pkg.description) // "Good-lookin' diffs. Actually… nah… The best-loo..."
 * console.log(pkg.programs)    // ["diff-so-fancy"]
 * console.log(pkg.versions[0]) // "1.4.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/so-fancy/diff-so-fancy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const diffsofancyPackage = {
  /**
   * The display name of this package.
   */
  name: 'diff-so-fancy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/so-fancy/diff-so-fancy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Good-lookin\' diffs. Actually… nah… The best-lookin\' diffs. :tada:' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/so-fancy/diff-so-fancy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install diff-so-fancy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'diff-so-fancy',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'so-fancy/diff-so-fancy',
  ] as const,
  fullPath: 'github.com/so-fancy/diff-so-fancy' as const,
}

export type DiffsofancyPackage = typeof diffsofancyPackage
