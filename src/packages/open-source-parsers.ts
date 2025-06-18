/**
 * **open-source-parsers** - pkgx package
 *
 * @domain `github.com/open-source-parsers`
 *
 * @install `pkgx github.com/open-source-parsers`
 * @name `open-source-parsers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.opensourceparsers
 * // Or access via domain
 * const samePkg = pantry.githubcomopensourceparsers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "open-source-parsers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/open-source-parsers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensourceparsersPackage = {
  /**
   * The display name of this package.
   */
  name: 'open-source-parsers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/open-source-parsers' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/open-source-parsers' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/open-source-parsers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/open-source-parsers' as const,
}

export type OpensourceparsersPackage = typeof opensourceparsersPackage
