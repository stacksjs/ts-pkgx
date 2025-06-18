/**
 * **github.com/json-c/json-c** - pkgx package
 *
 * @domain `github.com/json/c/json-c`
 *
 * @install `pkgx github.com/json-c/json-c`
 * @aliases `github.com/json-c/json-c`, `json-c/json-c`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomjsoncjsonc
 * // Or access via domain
 * const samePkg = pantry.githubcomjsoncjsonc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "json-c"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/json/c/json-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjsoncjsoncPackage = {
  /**
   * The display name of this package.
   */
  name: 'json-c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/json/c/json-c' as const,
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
  installCommand: 'pkgx github.com/json-c/json-c' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/json-c/json-c',
    'json-c/json-c',
  ] as const,
  fullPath: 'github.com/json-c/json-c' as const,
}

export type GithubcomjsoncjsoncPackage = typeof githubcomjsoncjsoncPackage
