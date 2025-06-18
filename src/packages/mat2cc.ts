/**
 * **mat2cc** - pkgx package
 *
 * @domain `github.com/mat2cc`
 *
 * @install `pkgx github.com/mat2cc`
 * @name `mat2cc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mat2cc
 * // Or access via domain
 * const samePkg = pantry.githubcommat2cc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mat2cc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mat2cc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mat2ccPackage = {
  /**
   * The display name of this package.
   */
  name: 'mat2cc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mat2cc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/mat2cc' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/mat2cc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mat2cc' as const,
}

export type Mat2ccPackage = typeof mat2ccPackage
