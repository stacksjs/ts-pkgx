/**
 * **mxcl** - pkgx package
 *
 * @domain `github.com/mxcl`
 *
 * @install `pkgx github.com/mxcl`
 * @name `mxcl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mxcl
 * // Or access via domain
 * const samePkg = pantry.githubcommxcl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mxcl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mxcl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mxclPackage = {
  /**
   * The display name of this package.
   */
  name: 'mxcl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mxcl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/mxcl' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/mxcl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mxcl' as const,
}

export type MxclPackage = typeof mxclPackage
