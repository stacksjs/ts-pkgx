/**
 * **update-mime-database** - Database of common MIME types
 *
 * @domain `freedesktop.org/shared-mime-info`
 * @programs `update-mime-database`
 * @version `2.4.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install update-mime-database`
 * @aliases `update-mime-database`
 * @dependencies `gnome.org/glib@2`, `gnu.org/gettext^0.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.updatemimedatabase
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgsharedmimeinfo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shared-mime-info"
 * console.log(pkg.description) // "Database of common MIME types"
 * console.log(pkg.programs)    // ["update-mime-database"]
 * console.log(pkg.versions[0]) // "2.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/shared-mime-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const updatemimedatabasePackage = {
  /**
   * The display name of this package.
   */
  name: 'shared-mime-info' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/shared-mime-info' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Database of common MIME types' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/shared-mime-info/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install update-mime-database' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'update-mime-database',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
    'gnu.org/gettext^0.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.0',
    '2.3.0',
    '2.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'update-mime-database',
  ] as const,
}

export type UpdatemimedatabasePackage = typeof updatemimedatabasePackage
