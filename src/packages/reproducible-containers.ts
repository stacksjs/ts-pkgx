/**
 * **reproducible-containers** - pkgx package
 *
 * @domain `github.com/reproducible-containers`
 *
 * @install `pkgx github.com/reproducible-containers`
 * @name `reproducible-containers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.reproduciblecontainers
 * // Or access via domain
 * const samePkg = pantry.githubcomreproduciblecontainers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "reproducible-containers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/reproducible-containers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const reproduciblecontainersPackage = {
  /**
   * The display name of this package.
   */
  name: 'reproducible-containers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/reproducible-containers' as const,
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
  installCommand: 'pkgx github.com/reproducible-containers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/reproducible-containers' as const,
}

export type ReproduciblecontainersPackage = typeof reproduciblecontainersPackage
