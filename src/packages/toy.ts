/**
 * **toy** - pkgx package
 *
 * @domain `github.com/toy`
 *
 * @install `pkgx github.com/toy`
 * @name `toy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.toy
 * // Or access via domain
 * const samePkg = pantry.githubcomtoy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "toy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/toy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const toyPackage = {
  /**
   * The display name of this package.
   */
  name: 'toy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/toy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/toy' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/toy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/toy' as const,
}

export type ToyPackage = typeof toyPackage
