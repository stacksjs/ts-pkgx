/**
 * **google.com/double-conversion** - pkgx package
 *
 * @domain `google.com/double/conversion`
 *
 * @install `pkgx google.com/double-conversion`
 * @name `double-conversion`
 * @aliases `google.com/double-conversion`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.googlecomdoubleconversion
 * // Or access via domain
 * const samePkg = pantry.googlecomdoubleconversion
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "double-conversion"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/double/conversion.md
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
  domain: 'google.com/double/conversion' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx google.com/double-conversion' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'google.com/double-conversion',
  ] as const,
  fullPath: 'google.com/double-conversion' as const,
}

export type GooglecomdoubleconversionPackage = typeof googlecomdoubleconversionPackage
