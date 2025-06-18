/**
 * **libbluray** - pkgx package
 *
 * @domain `videolan.org/libbluray`
 * @version `1.3.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +videolan.org/libbluray -- $SHELL -i`
 * @dependencies `freedesktop.org/fontconfig`, `freetype.org`, `gnome.org/libxml2`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.videolanorglibbluray
 * console.log(pkg.name)        // "libbluray"
 * console.log(pkg.versions[0]) // "1.3.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/libbluray.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const videolanorglibblurayPackage = {
  /**
   * The display name of this package.
   */
  name: 'libbluray' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'videolan.org/libbluray' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/libbluray/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +videolan.org/libbluray -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/fontconfig',
    'freetype.org',
    'gnome.org/libxml2',
    'gnu.org/automake',
    'gnu.org/autoconf',
    'gnu.org/libtool',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.4',
  ] as const,
  aliases: [] as const,
}

export type VideolanorglibblurayPackage = typeof videolanorglibblurayPackage
