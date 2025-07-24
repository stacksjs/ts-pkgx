/**
 * **libsndfile** - Package from pantry: github.com/libsndfile/libsndfile
 *
 * @domain `github.com/libsndfile/libsndfile`
 *
 * @install `launchpad install github.com/libsndfile/libsndfile`
 * @dependencies `xiph.org/flac`, `lame.sourceforge.io`, `xiph.org/ogg`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlibsndfilelibsndfile
 * console.log(pkg.name)        // "libsndfile"
 * console.log(pkg.description) // "Package from pantry: github.com/libsndfile/libs..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libsndfile/libsndfile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlibsndfilelibsndfilePackage = {
  /**
   * The display name of this package.
   */
  name: 'libsndfile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libsndfile/libsndfile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/libsndfile/libsndfile' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/libsndfile/libsndfile' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/libsndfile/libsndfile -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/libsndfile/libsndfile' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/flac',
    'lame.sourceforge.io',
    'xiph.org/ogg',
    'xiph.org/vorbis',
    'mpg123.de',
    'opus-codec.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsndfile/libsndfile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlibsndfilelibsndfilePackage = typeof githubcomlibsndfilelibsndfilePackage
