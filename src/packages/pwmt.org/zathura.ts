/**
 * **zathura** - Package from pantry: pwmt.org/zathura
 *
 * @domain `pwmt.org/zathura`
 *
 * @install `launchpad install pwmt.org/zathura`
 * @dependencies `gnome.org/glib^2.72`, `gnome.org/adwaita-icon-theme`, `gnu.org/gettext`, ... (+8 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pwmtorgzathura
 * console.log(pkg.name)        // "zathura"
 * console.log(pkg.description) // "Package from pantry: pwmt.org/zathura"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pwmt-org/zathura.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pwmtorgzathuraPackage = {
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
  description: 'Package from pantry: pwmt.org/zathura' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pwmt.org/zathura' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pwmt.org/zathura -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pwmt.org/zathura' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
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
    'darwin:gnome.org/gtk-mac-integration-gtk3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pwmt.org/zathura/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PwmtorgzathuraPackage = typeof pwmtorgzathuraPackage
