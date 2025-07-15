/**
 * **shared-mime-info** - Package from pantry: freedesktop.org/shared-mime-info
 *
 * @domain `freedesktop.org/shared-mime-info`
 *
 * @install `launchpad install freedesktop.org/shared-mime-info`
 * @dependencies `gnome.org/glib@2`, `gnu.org/gettext^0.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgsharedmimeinfo
 * console.log(pkg.name)        // "shared-mime-info"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/shared-mim..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/shared-mime-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgsharedmimeinfoPackage = {
  /**
   * The display name of this package.
   */
  name: 'shared-mime-info' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/shared-mime-info' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/shared-mime-info' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/shared-mime-info' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/shared-mime-info -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/shared-mime-info' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
    'gnu.org/gettext^0.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/shared-mime-info/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgsharedmimeinfoPackage = typeof freedesktoporgsharedmimeinfoPackage
