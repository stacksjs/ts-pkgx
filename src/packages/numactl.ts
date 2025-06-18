/**
 * **numactl** - pkgx package
 *
 * @domain `github.com/numactl`
 *
 * @install `pkgx github.com/numactl`
 * @name `numactl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.numactl
 * // Or access via domain
 * const samePkg = pantry.githubcomnumactl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "numactl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/numactl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const numactlPackage = {
  /**
   * The display name of this package.
   */
  name: 'numactl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/numactl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/numactl' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/numactl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/numactl' as const,
}

export type NumactlPackage = typeof numactlPackage
