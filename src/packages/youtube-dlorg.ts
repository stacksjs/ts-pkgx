/**
 * **youtube-dl.org** - pkgx package
 *
 * @domain `youtube-dl.org`
 *
 * @install `launchpad install youtube-dl.org`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.youtubedlorg
 * console.log(pkg.name)        // "youtube-dl.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/youtube-dl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const youtubedlorgPackage = {
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
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install youtube-dl.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +youtube-dl.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install youtube-dl.org' as const,
}

export type YoutubedlorgPackage = typeof youtubedlorgPackage
