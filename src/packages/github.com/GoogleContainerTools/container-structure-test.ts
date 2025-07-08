/**
 * **container-structure-test** - Package from pantry: github.com/GoogleContainerTools/container-structure-test
 *
 * @domain `github.com/GoogleContainerTools/container-structure-test`
 *
 * @install `launchpad install github.com/GoogleContainerTools/container-structure-test`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgooglecontainertoolscontainerstructuretest
 * console.log(pkg.name)        // "container-structure-test"
 * console.log(pkg.description) // "Package from pantry: github.com/GoogleContainer..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/GoogleContainerTools/container-structure-test.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgooglecontainertoolscontainerstructuretestPackage = {
  /**
   * The display name of this package.
   */
  name: 'container-structure-test' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/GoogleContainerTools/container-structure-test' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/GoogleContainerTools/container-structure-test' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/GoogleContainerTools/container-structure-test' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/GoogleContainerTools/container-structure-test -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/GoogleContainerTools/container-structure-test' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/GoogleContainerTools/container-structure-test/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgooglecontainertoolscontainerstructuretestPackage = typeof githubcomgooglecontainertoolscontainerstructuretestPackage
