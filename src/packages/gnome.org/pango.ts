/**
 * **pango** - Framework for layout and rendering of i18n text
 *
 * @domain `gnome.org/pango`
 * @programs `pango-list`, `pango-segmentation`, `pango-view`
 * @version `1.56.3` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/pango -- $SHELL -i`
 * @name `pango`
 * @dependencies `cairographics.org^1.18`, `freetype.org@2`, `gnome.org/glib@2`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pango
 * // Or access via domain
 * const samePkg = pantry.gnomeorgpango
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pango"
 * console.log(pkg.description) // "Framework for layout and rendering of i18n text"
 * console.log(pkg.programs)    // ["pango-list", "pango-segmentation", ...]
 * console.log(pkg.versions[0]) // "1.56.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/pango.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pangoPackage = {
  /**
   * The display name of this package.
   */
  name: 'pango' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/pango' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Framework for layout and rendering of i18n text' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/pango/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/pango -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pango-list',
    'pango-segmentation',
    'pango-view',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cairographics.org^1.18',
    'freetype.org@2',
    'gnome.org/glib@2',
    'harfbuzz.org@8',
    'freedesktop.org/fontconfig@2',
    'sourceware.org/libffi@3',
    'gnu.org/fribidi@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.56.3',
    '1.56.2',
    '1.56.1',
    '1.56.0',
    '1.55.5',
    '1.55.0',
    '1.54.0',
    '1.52.2',
    '1.52.1',
    '1.52.0',
    '1.51.2',
    '1.50.14',
    '1.50.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gnome.org/pango' as const,
}

export type PangoPackage = typeof pangoPackage
