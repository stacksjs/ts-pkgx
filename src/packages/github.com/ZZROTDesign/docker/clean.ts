/**
 * **github.com/ZZROTDesign/docker-clean** - pkgx package
 *
 * @domain `github.com/ZZROTDesign/docker/clean`
 *
 * @install `pkgx github.com/ZZROTDesign/docker-clean`
 * @aliases `github.com/ZZROTDesign/docker-clean`, `ZZROTDesign/docker-clean`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomZZROTDesigndockerclean
 * // Or access via domain
 * const samePkg = pantry.githubcomzzrotdesigndockerclean
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ZZROTDesign"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ZZROTDesign/docker/clean.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomZZROTDesigndockercleanPackage = {
  /**
   * The display name of this package.
   */
  name: 'ZZROTDesign' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ZZROTDesign/docker/clean' as const,
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
  installCommand: 'pkgx github.com/ZZROTDesign/docker-clean' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/ZZROTDesign/docker-clean',
    'ZZROTDesign/docker-clean',
  ] as const,
  fullPath: 'github.com/ZZROTDesign/docker-clean' as const,
}

export type GithubcomZZROTDesigndockercleanPackage = typeof githubcomZZROTDesigndockercleanPackage
