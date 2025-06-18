/**
 * **containers** - pkgx package
 *
 * @domain `github.com/containers`
 *
 * @install `pkgx github.com/containers`
 * @name `containers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.containers
 * // Or access via domain
 * const samePkg = pantry.githubcomcontainers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "containers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/containers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const containersPackage = {
  /**
   * The display name of this package.
   */
  name: 'containers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/containers' as const,
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
  installCommand: 'pkgx github.com/containers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/containers' as const,
}

export type ContainersPackage = typeof containersPackage
