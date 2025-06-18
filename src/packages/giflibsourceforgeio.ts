/**
 * **gif** - Library and utilities for processing GIFs
 *
 * @domain `giflib.sourceforge.io`
 * @programs `gif2rgb`, `gifbuild`, `gifclrmp`, `giffix`, `giftext`, ... (+1 more)
 * @version `5.2.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +giflib.sourceforge.io -- $SHELL -i`
 * @aliases `gif`
 * @dependencies `gnu.org/patch`, `imagemagick.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gif
 * // Or access via domain
 * const samePkg = pantry.giflibsourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "giflib.sourceforge.io"
 * console.log(pkg.description) // "Library and utilities for processing GIFs"
 * console.log(pkg.programs)    // ["gif2rgb", "gifbuild", ...]
 * console.log(pkg.versions[0]) // "5.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/giflib-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gifPackage = {
  /**
   * The display name of this package.
   */
  name: 'giflib.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'giflib.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library and utilities for processing GIFs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/giflib.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +giflib.sourceforge.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gif2rgb',
    'gifbuild',
    'gifclrmp',
    'giffix',
    'giftext',
    'giftool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/patch',
    'imagemagick.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.2.2',
    '5.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gif',
  ] as const,
}

export type GifPackage = typeof gifPackage
