/**
 * **container-structure-test** - validate the structure of your container images
 *
 * @domain `github.com/GoogleContainerTools/container-structure-test`
 * @programs `container-structure-test`
 * @version `1.19.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) container-structure-test`
 * @name `container-structure-test`
 * @aliases `GoogleContainerTools/container-structure-test`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.containerstructuretest
 * // Or access via domain
 * const samePkg = pantry.githubcomgooglecontainertoolscontainerstructuretest
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "container-structure-test"
 * console.log(pkg.description) // "validate the structure of your container images"
 * console.log(pkg.programs)    // ["container-structure-test"]
 * console.log(pkg.versions[0]) // "1.19.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/GoogleContainerTools/container-structure-test.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const containerstructuretestPackage = {
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
  description: 'validate the structure of your container images' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/GoogleContainerTools/container-structure-test/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) container-structure-test' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'container-structure-test',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.19.3',
    '1.19.2',
    '1.19.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'GoogleContainerTools/container-structure-test',
  ] as const,
  fullPath: 'github.com/GoogleContainerTools/container-structure-test' as const,
}

export type ContainerstructuretestPackage = typeof containerstructuretestPackage
