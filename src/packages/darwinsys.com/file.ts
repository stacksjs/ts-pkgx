/**
 * **file** - Read-only mirror of file CVS repository, updated every half hour. NOTE: do not make pull requests here, nor comment any commits, submit them usual way to bug tracker or to the mailing list. Maintainer(s) are not tracking  this git mirror.
 *
 * @domain `darwinsys.com/file`
 * @programs `file`
 * @version `5.46.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install file`
 * @name `file`
 * @dependencies `zlib.net^1 #FIXME this is actually an optional dep`, `gnu.org/patch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.file
 * // Or access via domain
 * const samePkg = pantry.darwinsyscomfile
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "file"
 * console.log(pkg.description) // "Read-only mirror of file CVS repository, update..."
 * console.log(pkg.programs)    // ["file"]
 * console.log(pkg.versions[0]) // "5.46.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/darwinsys-com/file.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const filePackage = {
  /**
   * The display name of this package.
   */
  name: 'file' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'darwinsys.com/file' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Read-only mirror of file CVS repository, updated every half hour. NOTE: do not make pull requests here, nor comment any commits, submit them usual way to bug tracker or to the mailing list. Maintainer(s) are not tracking  this git mirror.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/darwinsys.com/file/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install file' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'file',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1 #FIXME this is actually an optional dep',
    'gnu.org/patch',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.46.0',
    '5.45.0',
    '5.43.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type FilePackage = typeof filePackage
