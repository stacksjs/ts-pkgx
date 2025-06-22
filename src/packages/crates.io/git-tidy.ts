/**
 * **git-tidy** - Tidy up stale git branches.
 *
 * @domain `crates.io/git-tidy`
 * @programs `git-tidy`
 * @version `2.0.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git-tidy`
 * @name `git-tidy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gittidy
 * // Or access via domain
 * const samePkg = pantry.cratesiogittidy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-tidy"
 * console.log(pkg.description) // "Tidy up stale git branches."
 * console.log(pkg.programs)    // ["git-tidy"]
 * console.log(pkg.versions[0]) // "2.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-tidy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gittidyPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-tidy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-tidy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tidy up stale git branches.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-tidy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git-tidy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-tidy',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) git-tidy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git-tidy' as const,
}

export type GittidyPackage = typeof gittidyPackage
