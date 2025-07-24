/**
 * **rubberband** - Package from pantry: breakfastquay.com/rubberband
 *
 * @domain `breakfastquay.com/rubberband`
 *
 * @install `launchpad install breakfastquay.com/rubberband`
 * @dependencies `github.com/libsndfile/libsamplerate^0.2`, `github.com/libsndfile/libsndfile^1.2`, `linux:fftw.org^3.3`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.breakfastquaycomrubberband
 * console.log(pkg.name)        // "rubberband"
 * console.log(pkg.description) // "Package from pantry: breakfastquay.com/rubberband"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/breakfastquay-com/rubberband.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const breakfastquaycomrubberbandPackage = {
  /**
   * The display name of this package.
   */
  name: 'rubberband' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'breakfastquay.com/rubberband' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: breakfastquay.com/rubberband' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install breakfastquay.com/rubberband' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +breakfastquay.com/rubberband -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install breakfastquay.com/rubberband' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'github.com/libsndfile/libsamplerate^0.2',
    'github.com/libsndfile/libsndfile^1.2',
    'linux:fftw.org^3.3',
    'linux:ladspa.org^1.17',
    'linux:vamp-plugins.org^2.9',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/breakfastquay.com/rubberband/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BreakfastquaycomrubberbandPackage = typeof breakfastquaycomrubberbandPackage
