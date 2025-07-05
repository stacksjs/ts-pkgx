/**
 * **rename** - Rename multiple files
 *
 * @domain `plasmasturm.org/rename`
 * @programs `rename`
 * @version `1.601.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rename`
 * @name `rename`
 * @dependencies `perl.org>=5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rename
 * // Or access via domain
 * const samePkg = pantry.plasmasturmorgrename
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rename"
 * console.log(pkg.description) // "Rename multiple files"
 * console.log(pkg.programs)    // ["rename"]
 * console.log(pkg.versions[0]) // "1.601.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plasmasturm-org/rename.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const renamePackage = {
  /**
   * The display name of this package.
   */
  name: 'rename' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plasmasturm.org/rename' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Rename multiple files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plasmasturm.org/rename/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rename' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rename',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org>=5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.601.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) rename -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rename' as const,
}

export type RenamePackage = typeof renamePackage
