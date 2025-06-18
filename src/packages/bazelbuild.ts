/**
 * **bazelbuild** - pkgx package
 *
 * @domain `github.com/bazelbuild`
 *
 * @install `pkgx github.com/bazelbuild`
 * @name `bazelbuild`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bazelbuild
 * // Or access via domain
 * const samePkg = pantry.githubcombazelbuild
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bazelbuild"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/bazelbuild.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bazelbuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'bazelbuild' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/bazelbuild' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/bazelbuild' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/bazelbuild' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/bazelbuild' as const,
}

export type BazelbuildPackage = typeof bazelbuildPackage
