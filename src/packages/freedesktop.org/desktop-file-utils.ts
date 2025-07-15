/**
 * **desktop-file-utils** - Package from pantry: freedesktop.org/desktop-file-utils
 *
 * @domain `freedesktop.org/desktop-file-utils`
 *
 * @install `launchpad install freedesktop.org/desktop-file-utils`
 * @dependencies `gnome.org/glib@2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgdesktopfileutils
 * console.log(pkg.name)        // "desktop-file-utils"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/desktop-fi..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/desktop-file-utils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgdesktopfileutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'desktop-file-utils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/desktop-file-utils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/desktop-file-utils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/desktop-file-utils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/desktop-file-utils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/desktop-file-utils' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/desktop-file-utils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgdesktopfileutilsPackage = typeof freedesktoporgdesktopfileutilsPackage
