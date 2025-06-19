/**
 * **sf.net/e2fsprogs** - Utilities for the ext2, ext3, and ext4 file systems
 *
 * @domain `sourceforge.net/e2fsprogs`
 * @programs `chattr`, `compile_et`, `lsattr`, `mk_cmds`, `uuidgen`
 * @version `1.47.2` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +sourceforge.net/e2fsprogs -- $SHELL -i`
 * @aliases `sf.net/e2fsprogs`
 * @dependencies `darwin:gnu.org/gettext^0.22`, `linux:github.com/util-linux/util-linux^2.39` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sfnete2fsprogs
 * // Or access via domain
 * const samePkg = pantry.sourceforgenete2fsprogs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "e2fsprogs"
 * console.log(pkg.description) // "Utilities for the ext2, ext3, and ext4 file sys..."
 * console.log(pkg.programs)    // ["chattr", "compile_et", ...]
 * console.log(pkg.versions[0]) // "1.47.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/e2fsprogs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfnete2fsprogsPackage = {
  /**
   * The display name of this package.
   */
  name: 'e2fsprogs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/e2fsprogs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Utilities for the ext2, ext3, and ext4 file systems' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/e2fsprogs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +sourceforge.net/e2fsprogs -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'chattr',
    'compile_et',
    'lsattr',
    'mk_cmds',
    'uuidgen',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:gnu.org/gettext^0.22',
    'linux:github.com/util-linux/util-linux^2.39',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.47.2',
    '1.47.1',
    '1.47.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sf.net/e2fsprogs',
  ] as const,
}

export type Sfnete2fsprogsPackage = typeof sfnete2fsprogsPackage
