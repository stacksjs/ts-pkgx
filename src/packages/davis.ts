/**
 * **davis** - pkgx package
 *
 * @domain `people.engr.tamu.edu/davis`
 *
 * @install `pkgx people.engr.tamu.edu/davis`
 * @name `davis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.davis
 * // Or access via domain
 * const samePkg = pantry.peopleengrtamuedudavis
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "davis"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/people-engr-tamu-edu/davis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const davisPackage = {
  /**
   * The display name of this package.
   */
  name: 'davis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'people.engr.tamu.edu/davis' as const,
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
  installCommand: 'pkgx people.engr.tamu.edu/davis' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'people.engr.tamu.edu/davis' as const,
}

export type DavisPackage = typeof davisPackage
