/**
 * **yt-dlp** - A feature-rich command-line audio/video downloader
 *
 * @domain `yt-dlp.org`
 * @programs `yt-dlp`
 * @version `2025.5.22` (46 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/yt-dlp-org.md
 *
 * @install `sh <(curl https://pkgx.sh) yt-dlp`
 * @aliases `yt-dlp`
 * @dependencies `python.org>=3<3.12`, `ffmpeg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ytdlp
 * // Or access via domain
 * const samePkg = pantry.ytdlporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yt-dlp"
 * console.log(pkg.description) // "A feature-rich command-line audio/video downloader"
 * console.log(pkg.programs)    // ["yt-dlp"]
 * console.log(pkg.versions[0]) // "2025.5.22" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yt-dlp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ytdlpPackage = {
  /**
   * The display name of this package.
   */
  name: 'yt-dlp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yt-dlp.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A feature-rich command-line audio/video downloader' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yt-dlp.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) yt-dlp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yt-dlp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
    'ffmpeg.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.5.22',
    '2025.4.30',
    '2025.3.31',
    '2025.3.27',
    '2025.3.26',
    '2025.3.25',
    '2025.3.21',
    '2025.2.19',
    '2025.1.26',
    '2025.1.15',
    '2025.1.12',
    '2024.12.23',
    '2024.12.13',
    '2024.12.6',
    '2024.12.3',
    '2024.11.18',
    '2024.11.4',
    '2024.10.22',
    '2024.10.7',
    '2024.9.27',
    '2024.8.6',
    '2024.8.1',
    '2024.7.25',
    '2024.7.16',
    '2024.7.9',
    '2024.7.8',
    '2024.7.7',
    '2024.7.2',
    '2024.7.1',
    '2024.5.27',
    '2024.5.26',
    '2024.4.9',
    '2024.3.10',
    '2023.12.30',
    '2023.11.16',
    '2023.11.14',
    '2023.10.13',
    '2023.10.7',
    '2023.9.24',
    '2023.7.6',
    '2023.6.22',
    '2023.6.21',
    '2023.3.4',
    '2023.3.3',
    '2023.2.17',
    '2023.1.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'yt-dlp',
  ] as const,
  fullPath: 'yt-dlp.org' as const,
}

export type YtdlpPackage = typeof ytdlpPackage
