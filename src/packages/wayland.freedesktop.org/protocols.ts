/**
 * **protocols** - Package from pantry: wayland.freedesktop.org/protocols
 *
 * @domain `wayland.freedesktop.org/protocols`
 *
 * @install `launchpad install wayland.freedesktop.org/protocols`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.waylandfreedesktoporgprotocols
 * console.log(pkg.name)        // "protocols"
 * console.log(pkg.description) // "Package from pantry: wayland.freedesktop.org/pr..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wayland-freedesktop-org/protocols.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const waylandfreedesktoporgprotocolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'protocols' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wayland.freedesktop.org/protocols' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wayland.freedesktop.org/protocols' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wayland.freedesktop.org/protocols' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wayland.freedesktop.org/protocols/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WaylandfreedesktoporgprotocolsPackage = typeof waylandfreedesktoporgprotocolsPackage
