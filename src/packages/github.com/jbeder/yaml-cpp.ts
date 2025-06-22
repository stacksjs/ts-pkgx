/**
 * **github.com/jbeder/yaml-cpp** - A YAML parser and emitter in C++
 *
 * @domain `github.com/jbeder/yaml-cpp`
 * @version `0.8.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/jbeder/yaml-cpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjbederyamlcpp
 * console.log(pkg.name)        // "github.com/jbeder/yaml-cpp"
 * console.log(pkg.description) // "A YAML parser and emitter in C++"
 * console.log(pkg.versions[0]) // "0.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jbeder/yaml-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjbederyamlcppPackage = {
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jbeder/yaml-cpp' as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jbeder/yaml-cpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jbeder/yaml-cpp' as const,
}

export type GithubcomjbederyamlcppPackage = typeof githubcomjbederyamlcppPackage
