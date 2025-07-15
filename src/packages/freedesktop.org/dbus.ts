/**
 * **dbus** - Package from pantry: freedesktop.org/dbus
 *
 * @domain `freedesktop.org/dbus`
 *
 * @install `launchpad install freedesktop.org/dbus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgdbus
 * console.log(pkg.name)        // "dbus"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/dbus"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/dbus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgdbusPackage = {
  /**
   * The display name of this package.
   */
  name: 'dbus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/dbus' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/dbus' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/dbus' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/dbus -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/dbus' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/dbus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgdbusPackage = typeof freedesktoporgdbusPackage
