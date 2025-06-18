/**
 * **svenwiltink** - pkgx package
 *
 * @domain `github.com/svenwiltink`
 *
 * @install `pkgx github.com/svenwiltink`
 * @name `svenwiltink`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.svenwiltink
 * // Or access via domain
 * const samePkg = pantry.githubcomsvenwiltink
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "svenwiltink"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/svenwiltink.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const svenwiltinkPackage = {
  /**
   * The display name of this package.
   */
  name: 'svenwiltink' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/svenwiltink' as const,
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
  installCommand: 'pkgx github.com/svenwiltink' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/svenwiltink' as const,
}

export type SvenwiltinkPackage = typeof svenwiltinkPackage
