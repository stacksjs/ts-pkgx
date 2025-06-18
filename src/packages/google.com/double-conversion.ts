/**
 * **double-conversion** - Efficient binary-decimal and decimal-binary conversion routines for IEEE doubles.
 *
 * @domain `google.com/double-conversion`
 * @version `3.3.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +google.com/double-conversion -- $SHELL -i`
 * @dependencies `cmake.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomdoubleconversion
 * console.log(pkg.name)        // "double-conversion"
 * console.log(pkg.description) // "Efficient binary-decimal and decimal-binary con..."
 * console.log(pkg.versions[0]) // "3.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/double-conversion.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomdoubleconversionPackage = {
  /**
   * The display name of this package.
   */
  name: 'double-conversion' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/double-conversion' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Efficient binary-decimal and decimal-binary conversion routines for IEEE doubles.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/double-conversion/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +google.com/double-conversion -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.1',
    '3.3.0',
    '3.2.1',
  ] as const,
  aliases: [] as const,
}

export type GooglecomdoubleconversionPackage = typeof googlecomdoubleconversionPackage
