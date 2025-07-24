/**
 * **adwaita-icon-theme** - Package from pantry: gnome.org/adwaita-icon-theme
 *
 * @domain `gnome.org/adwaita-icon-theme`
 *
 * @install `launchpad install gnome.org/adwaita-icon-theme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgadwaitaicontheme
 * console.log(pkg.name)        // "adwaita-icon-theme"
 * console.log(pkg.description) // "Package from pantry: gnome.org/adwaita-icon-theme"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/adwaita-icon-theme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgadwaitaiconthemePackage = {
  /**
   * The display name of this package.
   */
  name: 'adwaita-icon-theme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/adwaita-icon-theme' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/adwaita-icon-theme' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/adwaita-icon-theme' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/adwaita-icon-theme -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/adwaita-icon-theme' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/adwaita-icon-theme/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorgadwaitaiconthemePackage = typeof gnomeorgadwaitaiconthemePackage
