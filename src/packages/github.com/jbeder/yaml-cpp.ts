/**
 * **yaml-cpp** - Package from pantry: github.com/jbeder/yaml-cpp
 *
 * @domain `github.com/jbeder/yaml-cpp`
 *
 * @install `launchpad install github.com/jbeder/yaml-cpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjbederyamlcpp
 * console.log(pkg.name)        // "yaml-cpp"
 * console.log(pkg.description) // "Package from pantry: github.com/jbeder/yaml-cpp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jbeder/yaml-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjbederyamlcppPackage = {
  /**
   * The display name of this package.
   */
  name: 'yaml-cpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jbeder/yaml-cpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jbeder/yaml-cpp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jbeder/yaml-cpp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jbeder/yaml-cpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jbeder/yaml-cpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jbeder/yaml-cpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjbederyamlcppPackage = typeof githubcomjbederyamlcppPackage
