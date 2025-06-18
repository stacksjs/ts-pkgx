/**
 * **zathura** - Document viewer
 *
 * @domain `pwmt.org/zathura`
 * @programs `zathura`
 * @version `0.5.11` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) zathura`
 * @name `zathura`
 * @dependencies `gnome.org/glib^2.72`, `gnome.org/adwaita-icon-theme`, `gnu.org/gettext`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zathura
 * // Or access via domain
 * const samePkg = pantry.pwmtorgzathura
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zathura"
 * console.log(pkg.description) // "Document viewer"
 * console.log(pkg.programs)    // ["zathura"]
 * console.log(pkg.versions[0]) // "0.5.11" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pwmt-org/zathura.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zathuraPackage = {
  /**
   * The display name of this package.
   */
  name: 'zathura' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pwmt.org/zathura' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Document viewer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pwmt.org/zathura/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) zathura' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zathura',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib^2.72',
    'gnome.org/adwaita-icon-theme',
    'gnu.org/gettext',
    'freedesktop.org/appstream',
    'pwmt.org/girara@0',
    'freedesktop.org/intltool',
    'freedesktop.org/desktop-file-utils',
    'darwinsys.com/file',
    'gtk.org/gtk3^3.22',
    'sqlite.org@3',
    'darwingnome.org/gtk-mac-integration-gtk3',
    'gnome.org/gtk-mac-integration-gtk3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.11',
    '0.5.10',
    '0.5.9',
    '0.5.8',
    '0.5.7',
    '0.5.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'pwmt.org/zathura' as const,
}

export type ZathuraPackage = typeof zathuraPackage
