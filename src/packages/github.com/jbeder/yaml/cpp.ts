/**
 * **github.com/jbeder/yaml-cpp** - pkgx package
 *
 * @domain `github.com/jbeder/yaml/cpp`
 *
 * @install `pkgx github.com/jbeder/yaml-cpp`
 * @aliases `github.com/jbeder/yaml-cpp`, `jbeder/yaml-cpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomjbederyamlcpp
 * // Or access via domain
 * const samePkg = pantry.githubcomjbederyamlcpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jbeder"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jbeder/yaml/cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjbederyamlcppPackage = {
  /**
   * The display name of this package.
   */
  name: 'jbeder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jbeder/yaml/cpp' as const,
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
  installCommand: 'pkgx github.com/jbeder/yaml-cpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/jbeder/yaml-cpp',
    'jbeder/yaml-cpp',
  ] as const,
  fullPath: 'github.com/jbeder/yaml-cpp' as const,
}

export type GithubcomjbederyamlcppPackage = typeof githubcomjbederyamlcppPackage
