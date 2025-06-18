/**
 * **wayland-protocols** - pkgx package
 *
 * @domain `wayland.freedesktop.org/protocols`
 * @version `1.45.0` (14 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/wayland-freedesktop-org/protocols.md
 *
 * @install `sh <(curl https://pkgx.sh) +wayland.freedesktop.org/protocols -- $SHELL -i`
 * @name `wayland-protocols`
 * @aliases `protocols`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.waylandprotocols
 * // Or access via domain
 * const samePkg = pantry.waylandfreedesktoporgprotocols
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wayland-protocols"
 * console.log(pkg.versions[0]) // "1.45.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wayland-freedesktop-org/protocols.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const waylandprotocolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'wayland-protocols' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wayland.freedesktop.org/protocols' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wayland.freedesktop.org/protocols/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +wayland.freedesktop.org/protocols -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.45.0',
    '1.44.0',
    '1.43.0',
    '1.42.0',
    '1.41.0',
    '1.40.0',
    '1.39.0',
    '1.38.0',
    '1.37.0',
    '1.36.0',
    '1.35.0',
    '1.34.0',
    '1.33.0',
    '1.32.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'protocols',
  ] as const,
  fullPath: 'wayland.freedesktop.org/protocols' as const,
}

export type WaylandprotocolsPackage = typeof waylandprotocolsPackage
