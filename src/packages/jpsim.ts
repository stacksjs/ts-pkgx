/**
 * **jpsim** - pkgx package
 *
 * @domain `github.com/jpsim`
 *
 * @install `pkgx github.com/jpsim`
 * @name `jpsim`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jpsim
 * // Or access via domain
 * const samePkg = pantry.githubcomjpsim
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jpsim"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jpsim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jpsimPackage = {
  /**
   * The display name of this package.
   */
  name: 'jpsim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jpsim' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/jpsim' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/jpsim' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jpsim' as const,
}

export type JpsimPackage = typeof jpsimPackage
