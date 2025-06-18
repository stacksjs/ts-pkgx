/**
 * **github.com/oapi-codegen/oapi-codegen** - pkgx package
 *
 * @domain `github.com/oapi/codegen/oapi-codegen`
 *
 * @install `pkgx github.com/oapi-codegen/oapi-codegen`
 * @aliases `github.com/oapi-codegen/oapi-codegen`, `oapi-codegen/oapi-codegen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomoapicodegenoapicodegen
 * // Or access via domain
 * const samePkg = pantry.githubcomoapicodegenoapicodegen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oapi-codegen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oapi/codegen/oapi-codegen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoapicodegenoapicodegenPackage = {
  /**
   * The display name of this package.
   */
  name: 'oapi-codegen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oapi/codegen/oapi-codegen' as const,
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
  installCommand: 'pkgx github.com/oapi-codegen/oapi-codegen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/oapi-codegen/oapi-codegen',
    'oapi-codegen/oapi-codegen',
  ] as const,
  fullPath: 'github.com/oapi-codegen/oapi-codegen' as const,
}

export type GithubcomoapicodegenoapicodegenPackage = typeof githubcomoapicodegenoapicodegenPackage
