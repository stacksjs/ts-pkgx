/**
 * **exiftool** - Perl lib for reading and writing EXIF metadata
 *
 * @domain `exiftool.org`
 * @programs `exiftool`
 * @version `13.30.0` (8 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/exiftool-org.md
 *
 * @install `sh <(curl https://pkgx.sh) exiftool`
 * @name `exiftool`
 * @dependencies `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.exiftool
 * // Or access via domain
 * const samePkg = pantry.exiftoolorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "exiftool"
 * console.log(pkg.description) // "Perl lib for reading and writing EXIF metadata"
 * console.log(pkg.programs)    // ["exiftool"]
 * console.log(pkg.versions[0]) // "13.30.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/exiftool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const exiftoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'exiftool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'exiftool.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Perl lib for reading and writing EXIF metadata' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/exiftool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) exiftool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'exiftool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '13.30.0',
    '13.25.0',
    '13.10.0',
    '13.0.0',
    '12.76.0',
    '12.75.0',
    '12.70.0',
    '12.60.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'exiftool.org' as const,
}

export type ExiftoolPackage = typeof exiftoolPackage
