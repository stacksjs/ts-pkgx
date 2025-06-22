/**
 * **rubberband** - Audio time stretcher tool and library
 *
 * @domain `breakfastquay.com/rubberband`
 * @programs `rubberband`
 * @version `4.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rubberband`
 * @name `rubberband`
 * @dependencies `github.com/libsndfile/libsamplerate^0.2`, `github.com/libsndfile/libsndfile^1.2`, `linux:fftw.org^3.3`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rubberband
 * // Or access via domain
 * const samePkg = pantry.breakfastquaycomrubberband
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rubberband"
 * console.log(pkg.description) // "Audio time stretcher tool and library"
 * console.log(pkg.programs)    // ["rubberband"]
 * console.log(pkg.versions[0]) // "4.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/breakfastquay-com/rubberband.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubberbandPackage = {
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
  description: 'Audio time stretcher tool and library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/breakfastquay.com/rubberband/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rubberband' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rubberband',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.0',
    '3.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) rubberband -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rubberband' as const,
}

export type RubberbandPackage = typeof rubberbandPackage
