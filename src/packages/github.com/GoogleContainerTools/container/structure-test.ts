/**
 * **github.com/GoogleContainerTools/container-structure-test** - pkgx package
 *
 * @domain `github.com/GoogleContainerTools/container/structure-test`
 *
 * @install `pkgx github.com/GoogleContainerTools/container-structure-test`
 * @aliases `github.com/GoogleContainerTools/container-structure-test`, `GoogleContainerTools/container-structure-test`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomGoogleContainerToolscontainerstructuretest
 * // Or access via domain
 * const samePkg = pantry.githubcomgooglecontainertoolscontainerstructuretest
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "GoogleContainerTools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/GoogleContainerTools/container/structure-test.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomGoogleContainerToolscontainerstructuretestPackage = {
  /**
   * The display name of this package.
   */
  name: 'GoogleContainerTools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/GoogleContainerTools/container/structure-test' as const,
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
  installCommand: 'pkgx github.com/GoogleContainerTools/container-structure-test' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/GoogleContainerTools/container-structure-test',
    'GoogleContainerTools/container-structure-test',
  ] as const,
  fullPath: 'github.com/GoogleContainerTools/container-structure-test' as const,
}

export type GithubcomGoogleContainerToolscontainerstructuretestPackage = typeof githubcomGoogleContainerToolscontainerstructuretestPackage
