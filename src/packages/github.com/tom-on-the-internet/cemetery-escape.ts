/**
 * **cemetery-escape** - A game in the terminal. Ghosts chase you. You find the key and escape.
 *
 * @domain `github.com/tom-on-the-internet/cemetery-escape`
 * @programs `cemetery-escape`
 * @version `0.0.7` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cemetery-escape`
 * @name `cemetery-escape`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cemeteryescape
 * // Or access via domain
 * const samePkg = pantry.githubcomtomontheinternetcemeteryescape
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cemetery-escape"
 * console.log(pkg.description) // "A game in the terminal. Ghosts chase you. You f..."
 * console.log(pkg.programs)    // ["cemetery-escape"]
 * console.log(pkg.versions[0]) // "0.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tom-on-the-internet/cemetery-escape.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cemeteryescapePackage = {
  /**
   * The display name of this package.
   */
  name: 'cemetery-escape' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tom-on-the-internet/cemetery-escape' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A game in the terminal. Ghosts chase you. You find the key and escape.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tom-on-the-internet/cemetery-escape/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cemetery-escape' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cemetery-escape',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CemeteryescapePackage = typeof cemeteryescapePackage
