/**
 * **diffoci** - diff for Docker and OCI container images
 *
 * @domain `github.com/reproducible-containers/diffoci`
 * @programs `diffoci`
 * @version `0.1.6` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install diffoci`
 * @name `diffoci`
 * @aliases `reproducible-containers/diffoci`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.diffoci
 * // Or access via domain
 * const samePkg = pantry.githubcomreproduciblecontainersdiffoci
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "diffoci"
 * console.log(pkg.description) // "diff for Docker and OCI container images"
 * console.log(pkg.programs)    // ["diffoci"]
 * console.log(pkg.versions[0]) // "0.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/reproducible-containers/diffoci.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const diffociPackage = {
  /**
   * The display name of this package.
   */
  name: 'diffoci' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/reproducible-containers/diffoci' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'diff for Docker and OCI container images' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/reproducible-containers/diffoci/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install diffoci' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'diffoci',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.6',
    '0.1.5',
    '0.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'reproducible-containers/diffoci',
  ] as const,
  fullPath: 'github.com/reproducible-containers/diffoci' as const,
}

export type DiffociPackage = typeof diffociPackage
