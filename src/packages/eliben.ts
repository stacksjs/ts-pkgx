/**
 * **eliben** - pkgx package
 *
 * @domain `github.com/eliben`
 *
 * @install `pkgx github.com/eliben`
 * @name `eliben`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eliben
 * // Or access via domain
 * const samePkg = pantry.githubcomeliben
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eliben"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/eliben.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elibenPackage = {
  /**
   * The display name of this package.
   */
  name: 'eliben' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/eliben' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/eliben' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/eliben' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/eliben' as const,
}

export type ElibenPackage = typeof elibenPackage
