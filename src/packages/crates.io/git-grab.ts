/**
 * **git-grab** - Clone a git repository into a standard location organised by domain and path.
 *
 * @domain `crates.io/git-grab`
 * @programs `git-grab`
 * @version `3.0.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git-grab`
 * @name `git-grab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitgrab
 * // Or access via domain
 * const samePkg = pantry.cratesiogitgrab
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-grab"
 * console.log(pkg.description) // "Clone a git repository into a standard location..."
 * console.log(pkg.programs)    // ["git-grab"]
 * console.log(pkg.versions[0]) // "3.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-grab.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitgrabPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-grab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-grab' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Clone a git repository into a standard location organised by domain and path.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-grab/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git-grab' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-grab',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.0',
    '2.1.0',
    '2.0.0',
    '1.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) git-grab -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git-grab' as const,
}

export type GitgrabPackage = typeof gitgrabPackage
