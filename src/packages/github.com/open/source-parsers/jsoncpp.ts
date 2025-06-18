/**
 * **github.com/open-source-parsers/jsoncpp** - pkgx package
 *
 * @domain `github.com/open/source-parsers/jsoncpp`
 *
 * @install `pkgx github.com/open-source-parsers/jsoncpp`
 * @aliases `github.com/open-source-parsers/jsoncpp`, `open-source-parsers/jsoncpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomopensourceparsersjsoncpp
 * // Or access via domain
 * const samePkg = pantry.githubcomopensourceparsersjsoncpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "open-source-parsers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/open/source-parsers/jsoncpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomopensourceparsersjsoncppPackage = {
  /**
   * The display name of this package.
   */
  name: 'open-source-parsers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/open/source-parsers/jsoncpp' as const,
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
  installCommand: 'pkgx github.com/open-source-parsers/jsoncpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/open-source-parsers/jsoncpp',
    'open-source-parsers/jsoncpp',
  ] as const,
  fullPath: 'github.com/open-source-parsers/jsoncpp' as const,
}

export type GithubcomopensourceparsersjsoncppPackage = typeof githubcomopensourceparsersjsoncppPackage
