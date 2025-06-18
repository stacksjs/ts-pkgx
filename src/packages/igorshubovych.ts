/**
 * **igorshubovych** - pkgx package
 *
 * @domain `github.com/igorshubovych`
 *
 * @install `pkgx github.com/igorshubovych`
 * @name `igorshubovych`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.igorshubovych
 * // Or access via domain
 * const samePkg = pantry.githubcomigorshubovych
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "igorshubovych"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/igorshubovych.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const igorshubovychPackage = {
  /**
   * The display name of this package.
   */
  name: 'igorshubovych' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/igorshubovych' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/igorshubovych' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/igorshubovych' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/igorshubovych' as const,
}

export type IgorshubovychPackage = typeof igorshubovychPackage
