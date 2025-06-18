/**
 * **github.com/P-H-C/phc-winner-argon2** - pkgx package
 *
 * @domain `github.com/P/H-C/phc-winner-argon2`
 *
 * @install `pkgx github.com/P-H-C/phc-winner-argon2`
 * @aliases `github.com/P-H-C/phc-winner-argon2`, `P-H-C/phc-winner-argon2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomPHCphcwinnerargon2
 * // Or access via domain
 * const samePkg = pantry.githubcomphcphcwinnerargon2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "P-H-C"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/P/H-C/phc-winner-argon2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomPHCphcwinnerargon2Package = {
  /**
   * The display name of this package.
   */
  name: 'P-H-C' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/P/H-C/phc-winner-argon2' as const,
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
  installCommand: 'pkgx github.com/P-H-C/phc-winner-argon2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/P-H-C/phc-winner-argon2',
    'P-H-C/phc-winner-argon2',
  ] as const,
  fullPath: 'github.com/P-H-C/phc-winner-argon2' as const,
}

export type GithubcomPHCphcwinnerargon2Package = typeof githubcomPHCphcwinnerargon2Package
