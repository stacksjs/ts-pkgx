/**
 * **libsamplerate** - Package from pantry: github.com/libsndfile/libsamplerate
 *
 * @domain `github.com/libsndfile/libsamplerate`
 *
 * @install `launchpad install github.com/libsndfile/libsamplerate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlibsndfilelibsamplerate
 * console.log(pkg.name)        // "libsamplerate"
 * console.log(pkg.description) // "Package from pantry: github.com/libsndfile/libs..."
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
  description: 'Package from pantry: github.com/libsndfile/libsamplerate' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/libsndfile/libsamplerate' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/libsndfile/libsamplerate -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/libsndfile/libsamplerate' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsndfile/libsamplerate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlibsndfilelibsampleratePackage = typeof githubcomlibsndfilelibsampleratePackage
