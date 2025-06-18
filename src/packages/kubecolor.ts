/**
 * **kubecolor** - pkgx package
 *
 * @domain `github.com/kubecolor`
 *
 * @install `pkgx github.com/kubecolor`
 * @name `kubecolor`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kubecolor
 * // Or access via domain
 * const samePkg = pantry.githubcomkubecolor
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kubecolor"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kubecolor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubecolorPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubecolor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kubecolor' as const,
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
  installCommand: 'pkgx github.com/kubecolor' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/kubecolor' as const,
}

export type KubecolorPackage = typeof kubecolorPackage
