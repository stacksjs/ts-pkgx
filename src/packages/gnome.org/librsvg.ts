/**
 * **librsvg** - Package from pantry: gnome.org/librsvg
 *
 * @domain `gnome.org/librsvg`
 *
 * @install `launchpad install gnome.org/librsvg`
 * @dependencies `cairographics.org^1.18`, `gnome.org/pango@1`, `gnome.org/gdk-pixbuf@2`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorglibrsvg
 * console.log(pkg.name)        // "librsvg"
 * console.log(pkg.description) // "Package from pantry: gnome.org/librsvg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/librsvg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorglibrsvgPackage = {
  /**
   * The display name of this package.
   */
  name: 'librsvg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/librsvg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/librsvg' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/librsvg' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/librsvg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/librsvg' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cairographics.org^1.18',
    'gnome.org/pango@1',
    'gnome.org/gdk-pixbuf@2',
    'gnome.org/glib@2',
    'gnu.org/gettext^0.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/librsvg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorglibrsvgPackage = typeof gnomeorglibrsvgPackage
