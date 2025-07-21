/**
 * **cpptoml** - Package from pantry: github.com/skystrife/cpptoml
 *
 * @domain `github.com/skystrife/cpptoml`
 *
 * @install `launchpad install github.com/skystrife/cpptoml`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomskystrifecpptoml
 * console.log(pkg.name)        // "cpptoml"
 * console.log(pkg.description) // "Package from pantry: github.com/skystrife/cpptoml"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/skystrife/cpptoml.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomskystrifecpptomlPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpptoml' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/skystrife/cpptoml' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/skystrife/cpptoml' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/skystrife/cpptoml' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/skystrife/cpptoml -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/skystrife/cpptoml' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/skystrife/cpptoml/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomskystrifecpptomlPackage = typeof githubcomskystrifecpptomlPackage
