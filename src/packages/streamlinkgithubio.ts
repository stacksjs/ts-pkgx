/**
 * **streamlink** - Streamlink is a CLI utility which pipes video streams from various services into a video player
 *
 * @domain `streamlink.github.io`
 * @programs `streamlink`
 * @version `7.5.0` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install streamlink`
 * @name `streamlink`
 * @dependencies `pkgx.sh^1`
 * @companions `ffmpeg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.streamlink
 * // Or access via domain
 * const samePkg = pantry.streamlinkgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "streamlink"
 * console.log(pkg.description) // "Streamlink is a CLI utility which pipes video s..."
 * console.log(pkg.programs)    // ["streamlink"]
 * console.log(pkg.versions[0]) // "7.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/streamlink-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const streamlinkPackage = {
  /**
   * The display name of this package.
   */
  name: 'streamlink' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'streamlink.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Streamlink is a CLI utility which pipes video streams from various services into a video player' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/streamlink.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install streamlink' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'streamlink',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'ffmpeg.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.5.0',
    '7.4.0',
    '7.3.0',
    '7.2.0',
    '7.1.3',
    '7.1.2',
    '7.1.1',
    '7.1.0',
    '7.0.0',
    '6.11.0',
    '6.10.0',
    '6.9.0',
    '6.8.3',
    '6.8.2',
    '6.8.1',
    '6.8.0',
    '6.7.4',
    '6.7.3',
    '6.7.2',
    '6.7.1',
    '6.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) streamlink -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install streamlink' as const,
}

export type StreamlinkPackage = typeof streamlinkPackage
