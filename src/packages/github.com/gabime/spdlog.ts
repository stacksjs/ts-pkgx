/**
 * **gabime/spdlog** - Fast C++ logging library.
 *
 * @domain `github.com/gabime/spdlog`
 * @version `1.15.3` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/gabime/spdlog -- $SHELL -i`
 * @aliases `gabime/spdlog`
 * @dependencies `fmt.dev^11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gabimespdlog
 * // Or access via domain
 * const samePkg = pantry.githubcomgabimespdlog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/gabime/spdlog"
 * console.log(pkg.description) // "Fast C++ logging library."
 * console.log(pkg.versions[0]) // "1.15.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gabime/spdlog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gabimespdlogPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/gabime/spdlog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gabime/spdlog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast C++ logging library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gabime/spdlog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/gabime/spdlog -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'fmt.dev^11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.15.3',
    '1.15.2',
    '1.15.1',
    '1.15.0',
    '1.14.1',
    '1.14.0',
    '1.13.0',
    '1.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gabime/spdlog',
  ] as const,
  fullPath: 'github.com/gabime/spdlog' as const,
}

export type GabimespdlogPackage = typeof gabimespdlogPackage
