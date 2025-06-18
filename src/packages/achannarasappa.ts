/**
 * **achannarasappa** - pkgx package
 *
 * @domain `github.com/achannarasappa`
 *
 * @install `pkgx github.com/achannarasappa`
 * @name `achannarasappa`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.achannarasappa
 * // Or access via domain
 * const samePkg = pantry.githubcomachannarasappa
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "achannarasappa"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/achannarasappa.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const achannarasappaPackage = {
  /**
   * The display name of this package.
   */
  name: 'achannarasappa' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/achannarasappa' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/achannarasappa' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/achannarasappa' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/achannarasappa' as const,
}

export type AchannarasappaPackage = typeof achannarasappaPackage
