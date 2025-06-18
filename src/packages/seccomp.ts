/**
 * **seccomp** - pkgx package
 *
 * @domain `github.com/seccomp`
 *
 * @install `pkgx github.com/seccomp`
 * @name `seccomp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.seccomp
 * // Or access via domain
 * const samePkg = pantry.githubcomseccomp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "seccomp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/seccomp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const seccompPackage = {
  /**
   * The display name of this package.
   */
  name: 'seccomp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/seccomp' as const,
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
  installCommand: 'pkgx github.com/seccomp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/seccomp' as const,
}

export type SeccompPackage = typeof seccompPackage
