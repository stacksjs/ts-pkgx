/**
 * **dbus** - Message bus system, providing inter-application communication
 *
 * @domain `freedesktop.org/dbus`
 * @programs `dbus-cleanup-sockets`, `dbus-daemon`, `dbus-launch`, `dbus-monitor`, `dbus-run-session`, ... (+4 more)
 * @version `1.16.2` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +freedesktop.org/dbus -- $SHELL -i`
 * @name `dbus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dbus
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgdbus
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dbus"
 * console.log(pkg.description) // "Message bus system, providing inter-application..."
 * console.log(pkg.programs)    // ["dbus-cleanup-sockets", "dbus-daemon", ...]
 * console.log(pkg.versions[0]) // "1.16.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/dbus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dbusPackage = {
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
  description: 'Message bus system, providing inter-application communication' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/dbus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +freedesktop.org/dbus -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dbus-cleanup-sockets',
    'dbus-daemon',
    'dbus-launch',
    'dbus-monitor',
    'dbus-run-session',
    'dbus-send',
    'dbus-test-tool',
    'dbus-update-activation-environment',
    'dbus-uuidgen',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.2',
    '1.16.0',
    '1.15.92',
    '1.15.90',
    '1.15.12',
    '1.15.10',
    '1.15.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type DbusPackage = typeof dbusPackage
