/**
 * **helmfile** - pkgx package
 *
 * @domain `github.com/helmfile`
 *
 * @install `pkgx github.com/helmfile`
 * @name `helmfile`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.helmfile
 * // Or access via domain
 * const samePkg = pantry.githubcomhelmfile
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "helmfile"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/helmfile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const helmfilePackage = {
  /**
   * The display name of this package.
   */
  name: 'helmfile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/helmfile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/helmfile' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/helmfile' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/helmfile' as const,
}

export type HelmfilePackage = typeof helmfilePackage
