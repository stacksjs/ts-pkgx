/**
 * **xdg-user-dirs** - Package from pantry: freedesktop.org/xdg-user-dirs
 *
 * @domain `freedesktop.org/xdg-user-dirs`
 *
 * @install `launchpad install freedesktop.org/xdg-user-dirs`
 * @dependencies `gnu.org/gettext^0.21`, `gnu.org/libiconv^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgxdguserdirs
 * console.log(pkg.name)        // "xdg-user-dirs"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/xdg-user-dirs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xdg-user-dirs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxdguserdirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'xdg-user-dirs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xdg-user-dirs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/xdg-user-dirs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/xdg-user-dirs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xdg-user-dirs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/xdg-user-dirs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0.21',
    'gnu.org/libiconv^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xdg-user-dirs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgxdguserdirsPackage = typeof freedesktoporgxdguserdirsPackage
