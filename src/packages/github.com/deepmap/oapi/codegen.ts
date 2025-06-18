/**
 * **github.com/deepmap/oapi-codegen** - pkgx package
 *
 * @domain `github.com/deepmap/oapi/codegen`
 *
 * @install `pkgx github.com/deepmap/oapi-codegen`
 * @aliases `github.com/deepmap/oapi-codegen`, `deepmap/oapi-codegen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomdeepmapoapicodegen
 * // Or access via domain
 * const samePkg = pantry.githubcomdeepmapoapicodegen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "deepmap"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/deepmap/oapi/codegen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdeepmapoapicodegenPackage = {
  /**
   * The display name of this package.
   */
  name: 'deepmap' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/deepmap/oapi/codegen' as const,
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
  installCommand: 'pkgx github.com/deepmap/oapi-codegen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/deepmap/oapi-codegen',
    'deepmap/oapi-codegen',
  ] as const,
  fullPath: 'github.com/deepmap/oapi-codegen' as const,
}

export type GithubcomdeepmapoapicodegenPackage = typeof githubcomdeepmapoapicodegenPackage
