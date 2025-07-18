/**
 * **trash** - a cli system trash manager, alternative to rm and trash-cli
 *
 * @domain `crates.io/trashy`
 * @programs `trash`
 * @version `2.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install trash`
 * @name `trash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.trash
 * // Or access via domain
 * const samePkg = pantry.cratesiotrashy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "trash"
 * console.log(pkg.description) // "a cli system trash manager, alternative to rm a..."
 * console.log(pkg.programs)    // ["trash"]
 * console.log(pkg.versions[0]) // "2.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/trashy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const trashPackage = {
  /**
   * The display name of this package.
   */
  name: 'trash' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/trashy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'a cli system trash manager, alternative to rm and trash-cli' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/trashy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install trash' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'trash',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.0',
    '1.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) trash -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install trash' as const,
}

export type TrashPackage = typeof trashPackage
