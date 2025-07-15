/**
 * **gif2rgb** - Library and utilities for processing GIFs
 *
 * @domain `giflib.sourceforge.io`
 * @programs `gif2rgb`, `gifbuild`, `gifclrmp`, `giffix`, `giftext`, ... (+1 more)
 * @version `5.2.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gif2rgb`
 * @name `gif2rgb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gif2rgb
 * // Or access via domain
 * const samePkg = pantry.giflibsourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gif2rgb"
 * console.log(pkg.description) // "Library and utilities for processing GIFs"
 * console.log(pkg.programs)    // ["gif2rgb", "gifbuild", ...]
 * console.log(pkg.versions[0]) // "5.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/giflib-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gif2rgbPackage = {
  /**
   * The display name of this package.
   */
  name: 'gif2rgb' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gif2rgb' as const,
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
  dependencies: [] as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +giflib.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gif2rgb' as const,
}

export type Gif2rgbPackage = typeof gif2rgbPackage
