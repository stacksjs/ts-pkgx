/**
 * **libsamplerate** - An audio Sample Rate Conversion library
 *
 * @domain `github.com/libsndfile/libsamplerate`
 * @version `0.2.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/libsndfile/libsamplerate -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlibsndfilelibsamplerate
 * console.log(pkg.name)        // "libsamplerate"
 * console.log(pkg.description) // "An audio Sample Rate Conversion library"
 * console.log(pkg.versions[0]) // "0.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libsndfile/libsamplerate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlibsndfilelibsampleratePackage = {
  /**
   * The display name of this package.
   */
  name: 'libsamplerate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libsndfile/libsamplerate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An audio Sample Rate Conversion library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsndfile/libsamplerate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/libsndfile/libsamplerate -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.2',
  ] as const,
  aliases: [] as const,
}

export type GithubcomlibsndfilelibsampleratePackage = typeof githubcomlibsndfilelibsampleratePackage
