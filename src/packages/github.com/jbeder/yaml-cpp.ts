/**
 * **jbeder/yaml-cpp** - A YAML parser and emitter in C++
 *
 * @domain `github.com/jbeder/yaml-cpp`
 * @version `0.8.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/jbeder/yaml-cpp -- $SHELL -i`
 * @aliases `jbeder/yaml-cpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jbederyamlcpp
 * // Or access via domain
 * const samePkg = pantry.githubcomjbederyamlcpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/jbeder/yaml-cpp"
 * console.log(pkg.description) // "A YAML parser and emitter in C++"
 * console.log(pkg.versions[0]) // "0.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jbeder/yaml-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jbederyamlcppPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/jbeder/yaml-cpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jbeder/yaml-cpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A YAML parser and emitter in C++' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jbeder/yaml-cpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/jbeder/yaml-cpp -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.0',
    '0.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jbeder/yaml-cpp',
  ] as const,
  fullPath: 'github.com/jbeder/yaml-cpp' as const,
}

export type JbederyamlcppPackage = typeof jbederyamlcppPackage
