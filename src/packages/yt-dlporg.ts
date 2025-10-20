/**
 * **yt-dlp** - pkgx package
 *
 * @domain `yt-dlp.org`
 * @version `2025.10.14` (58 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install yt-dlp.org`
 * @dependencies `python.org>=3<3.12`, `ffmpeg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ytdlporg
 * console.log(pkg.name)        // "yt-dlp"
 * console.log(pkg.versions[0]) // "2025.10.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yt-dlp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ytdlporgPackage = {
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yt-dlp.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install yt-dlp.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +yt-dlp.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install yt-dlp.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   */
  dependencies: [
    'python.org>=3<3.12',
    'ffmpeg.org',
  ] as const,
  buildDependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.10.14',
    '2025.9.26',
    '2025.9.23',
    '2025.9.5',
    '2025.8.27',
    '2025.8.22',
    '2025.8.20',
    '2025.8.11',
    '2025.7.21',
    '2025.6.30',
    '2025.6.25',
    '2025.6.9',
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
  aliases: [] as const,
}

export type YtdlporgPackage = typeof ytdlporgPackage
