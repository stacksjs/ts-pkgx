/**
 * **github.com/reproducible-containers/diffoci** - pkgx package
 *
 * @domain `github.com/reproducible/containers/diffoci`
 *
 * @install `pkgx github.com/reproducible-containers/diffoci`
 * @aliases `github.com/reproducible-containers/diffoci`, `reproducible-containers/diffoci`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomreproduciblecontainersdiffoci
 * // Or access via domain
 * const samePkg = pantry.githubcomreproduciblecontainersdiffoci
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "reproducible-containers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/reproducible/containers/diffoci.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomreproduciblecontainersdiffociPackage = {
  /**
   * The display name of this package.
   */
  name: 'reproducible-containers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/reproducible/containers/diffoci' as const,
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
  installCommand: 'pkgx github.com/reproducible-containers/diffoci' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/reproducible-containers/diffoci',
    'reproducible-containers/diffoci',
  ] as const,
  fullPath: 'github.com/reproducible-containers/diffoci' as const,
}

export type GithubcomreproduciblecontainersdiffociPackage = typeof githubcomreproduciblecontainersdiffociPackage
