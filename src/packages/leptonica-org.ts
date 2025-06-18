/**
 * **leptonica.org** - Leptonica is an open source library containing software that is broadly useful for image processing and image analysis applications. The official github repository for Leptonica is: danbloomberg/leptonica.  See leptonica.org for more documentation.
 *
 * @domain `leptonica.org`
 * @programs `convertfilestopdf`, `convertfilestops`, `convertformat`, `convertsegfilestopdf`, `convertsegfilestops`, ... (+5 more)
 * @version `1.85.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +leptonica.org -- $SHELL -i`
 * @dependencies `giflib.sourceforge.io@5`, `libjpeg-turbo.org@2`, `libpng.org@1`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leptonicaorg
 * console.log(pkg.name)        // "leptonica.org"
 * console.log(pkg.description) // "Leptonica is an open source library containing ..."
 * console.log(pkg.programs)    // ["convertfilestopdf", "convertfilestops", ...]
 * console.log(pkg.versions[0]) // "1.85.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leptonica-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leptonicaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'leptonica.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leptonica.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Leptonica is an open source library containing software that is broadly useful for image processing and image analysis applications. The official github repository for Leptonica is: danbloomberg/leptonica.  See leptonica.org for more documentation.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leptonica.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +leptonica.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'convertfilestopdf',
    'convertfilestops',
    'convertformat',
    'convertsegfilestopdf',
    'convertsegfilestops',
    'converttopdf',
    'converttops',
    'fileinfo',
    'imagetops',
    'xtractprotos',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'giflib.sourceforge.io@5',
    'libjpeg-turbo.org@2',
    'libpng.org@1',
    'simplesystems.org/libtiff@4',
    'openjpeg.org',
    'google.com/webp',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.85.0',
    '1.84.1',
    '1.84.0',
    '1.83.1',
  ] as const,
  aliases: [] as const,
  fullPath: 'leptonica.org' as const,
}

export type LeptonicaorgPackage = typeof leptonicaorgPackage
