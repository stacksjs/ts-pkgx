/**
 * **orc** - Package from pantry: gstreamer.freedesktop.org/orc
 *
 * @domain `gstreamer.freedesktop.org/orc`
 *
 * @install `launchpad install gstreamer.freedesktop.org/orc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gstreamerfreedesktoporgorc
 * console.log(pkg.name)        // "orc"
 * console.log(pkg.description) // "Package from pantry: gstreamer.freedesktop.org/orc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gstreamer-freedesktop-org/orc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gstreamerfreedesktoporgorcPackage = {
  /**
   * The display name of this package.
   */
  name: 'orc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gstreamer.freedesktop.org/orc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gstreamer.freedesktop.org/orc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gstreamer.freedesktop.org/orc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gstreamer.freedesktop.org/orc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gstreamer.freedesktop.org/orc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gstreamer.freedesktop.org/orc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GstreamerfreedesktoporgorcPackage = typeof gstreamerfreedesktoporgorcPackage
