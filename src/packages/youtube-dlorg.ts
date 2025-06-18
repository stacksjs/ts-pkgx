/**
 * **youtube-dl.org** - Package from pantry: youtube-dl.org
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
 * console.log(pkg.description) // "Package from pantry: youtube-dl.org"
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
  description: 'Package from pantry: youtube-dl.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/youtube-dl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type YoutubedlorgPackage = typeof youtubedlorgPackage
