/**
 * **youtube-dl** - Command-line program to download videos from YouTube.com and other video sites
 *
 * @domain `youtube-dl.org`
 * @programs `youtube-dl`
 * @version `2023.8.4` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install youtube-dl`
 * @aliases `youtube-dl`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.youtubedl
 * // Or access via domain
 * const samePkg = pantry.youtubedlorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "youtube-dl.org"
 * console.log(pkg.description) // "Command-line program to download videos from Yo..."
 * console.log(pkg.programs)    // ["youtube-dl"]
 * console.log(pkg.versions[0]) // "2023.8.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/youtube-dl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const youtubedlPackage = {
  /**
   * The display name of this package.
   */
  name: 'youtube-dl.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'youtube-dl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line program to download videos from YouTube.com and other video sites' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/youtube-dl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install youtube-dl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'youtube-dl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.8.4',
    '2021.12.17',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'youtube-dl',
  ] as const,
}

export type YoutubedlPackage = typeof youtubedlPackage
