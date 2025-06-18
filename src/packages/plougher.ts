/**
 * **plougher** - pkgx package
 *
 * @domain `github.com/plougher`
 *
 * @install `pkgx github.com/plougher`
 * @name `plougher`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.plougher
 * // Or access via domain
 * const samePkg = pantry.githubcomplougher
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "plougher"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/plougher.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plougherPackage = {
  /**
   * The display name of this package.
   */
  name: 'plougher' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/plougher' as const,
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
  installCommand: 'pkgx github.com/plougher' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/plougher' as const,
}

export type PlougherPackage = typeof plougherPackage
