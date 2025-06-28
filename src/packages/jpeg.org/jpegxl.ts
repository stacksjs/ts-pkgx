/**
 * **jpegxl** - Package from pantry: jpeg.org/jpegxl
 *
 * @domain `jpeg.org/jpegxl`
 *
 * @install `launchpad install jpeg.org/jpegxl`
 * @dependencies `github.com/google/brotli^1`, `littlecms.com^2.13`, `google.com/highway^1`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jpegorgjpegxl
 * console.log(pkg.name)        // "jpegxl"
 * console.log(pkg.description) // "Package from pantry: jpeg.org/jpegxl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jpeg-org/jpegxl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jpegorgjpegxlPackage = {
  /**
   * The display name of this package.
   */
  name: 'jpegxl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jpeg.org/jpegxl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jpeg.org/jpegxl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jpeg.org/jpegxl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jpeg.org/jpegxl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jpeg.org/jpegxl' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/google/brotli^1',
    'littlecms.com^2.13',
    'google.com/highway^1',
    'google.com/webp^1',
    'giflib.sourceforge.io^5',
    'openexr.com^3',
    'libpng.org^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jpeg.org/jpegxl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JpegorgjpegxlPackage = typeof jpegorgjpegxlPackage
