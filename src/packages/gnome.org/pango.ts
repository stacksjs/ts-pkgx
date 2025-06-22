/**
 * **pango** - Package from pantry: gnome.org/pango
 *
 * @domain `gnome.org/pango`
 *
 * @install `launchpad install gnome.org/pango`
 * @dependencies `cairographics.org^1.18`, `freetype.org@2`, `gnome.org/glib@2`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgpango
 * console.log(pkg.name)        // "pango"
 * console.log(pkg.description) // "Package from pantry: gnome.org/pango"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/pango.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgpangoPackage = {
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
  description: 'Package from pantry: gnome.org/pango' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/pango' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/pango -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/pango' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/pango/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorgpangoPackage = typeof gnomeorgpangoPackage
