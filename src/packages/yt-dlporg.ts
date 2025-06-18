/**
 * **yt-dlp.org** - Package from pantry: yt-dlp.org
 *
 * @domain `yt-dlp.org`
 *
 * @install `launchpad install yt-dlp.org`
 * @dependencies `python.org>=3<3.12`, `ffmpeg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ytdlporg
 * console.log(pkg.name)        // "yt-dlp.org"
 * console.log(pkg.description) // "Package from pantry: yt-dlp.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yt-dlp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ytdlporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'yt-dlp.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yt-dlp.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: yt-dlp.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install yt-dlp.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
    'ffmpeg.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yt-dlp.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type YtdlporgPackage = typeof ytdlporgPackage
