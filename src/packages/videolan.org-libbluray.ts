/**
 * **libbluray** - pkgx package
 *
 * @domain `videolan.org/libbluray`
 * @version `1.3.4` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/libbluray.md
 *
 * @install `sh <(curl https://pkgx.sh) +videolan.org/libbluray -- $SHELL -i`
 * @aliases `libbluray`
 * @dependencies `freedesktop.org/fontconfig`, `freetype.org`, `darwingnome.org/libxml2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libbluray
 * // Or access via domain
 * const samePkg = pantry.videolanorglibbluray
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "videolan.org/libbluray"
 * console.log(pkg.versions[0]) // "1.3.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/libbluray.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libblurayPackage = {
  /**
   * The display name of this package.
   */
  name: 'videolan.org/libbluray' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'videolan.org/libbluray' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from videolan.org/libbluray' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/libbluray/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +videolan.org/libbluray -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/fontconfig',
    'freetype.org',
    'darwingnome.org/libxml2',
    'gnome.org/libxml2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libbluray',
  ] as const,
  fullPath: 'videolan.org/libbluray' as const,
}

export type LibblurayPackage = typeof libblurayPackage
