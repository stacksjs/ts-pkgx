/**
 * **mozjpeg** - Package from pantry: mozilla.org/mozjpeg
 *
 * @domain `mozilla.org/mozjpeg`
 *
 * @install `launchpad install mozilla.org/mozjpeg`
 * @dependencies `libpng.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mozillaorgmozjpeg
 * console.log(pkg.name)        // "mozjpeg"
 * console.log(pkg.description) // "Package from pantry: mozilla.org/mozjpeg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/mozjpeg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mozillaorgmozjpegPackage = {
  /**
   * The display name of this package.
   */
  name: 'mozjpeg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org/mozjpeg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mozilla.org/mozjpeg' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mozilla.org/mozjpeg' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mozilla.org/mozjpeg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mozilla.org/mozjpeg' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/mozjpeg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MozillaorgmozjpegPackage = typeof mozillaorgmozjpegPackage
