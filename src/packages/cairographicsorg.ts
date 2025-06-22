/**
 * **cairo-trace** - Vector graphics library with cross-device output support
 *
 * @domain `cairographics.org`
 * @programs `cairo-trace`
 * @version `1.18.4` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cairo-trace`
 * @aliases `cairo-trace`
 * @dependencies `libpng.org@1`, `pixman.org^0.40.0`, `freetype.org@2`, ... (+8 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cairotrace
 * // Or access via domain
 * const samePkg = pantry.cairographicsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cairographics.org"
 * console.log(pkg.description) // "Vector graphics library with cross-device outpu..."
 * console.log(pkg.programs)    // ["cairo-trace"]
 * console.log(pkg.versions[0]) // "1.18.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cairographics-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cairotracePackage = {
  /**
   * The display name of this package.
   */
  name: 'cairographics.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cairographics.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Vector graphics library with cross-device output support' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cairographics.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cairo-trace' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cairo-trace',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org@1',
    'pixman.org^0.40.0',
    'freetype.org@2',
    'gnome.org/glib@2',
    'freedesktop.org/fontconfig@2',
    'sourceware.org/bzip2@1',
    'x.org/x11',
    'x.org/xcb',
    'x.org/exts',
    'x.org/xrender',
    'oberhumer.com/lzo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.18.4',
    '1.18.2',
    '1.18.0',
    '1.16.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cairo-trace',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cairo-trace -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cairo-trace' as const,
}

export type CairotracePackage = typeof cairotracePackage
