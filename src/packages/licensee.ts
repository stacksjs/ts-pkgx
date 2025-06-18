/**
 * **licensee** - pkgx package
 *
 * @domain `github.com/licensee`
 *
 * @install `pkgx github.com/licensee`
 * @name `licensee`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.licensee
 * // Or access via domain
 * const samePkg = pantry.githubcomlicensee
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "licensee"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/licensee.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const licenseePackage = {
  /**
   * The display name of this package.
   */
  name: 'licensee' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/licensee' as const,
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
  installCommand: 'pkgx github.com/licensee' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/licensee' as const,
}

export type LicenseePackage = typeof licenseePackage
