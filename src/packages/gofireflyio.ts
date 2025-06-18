/**
 * **gofireflyio** - pkgx package
 *
 * @domain `github.com/gofireflyio`
 *
 * @install `pkgx github.com/gofireflyio`
 * @name `gofireflyio`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gofireflyio
 * // Or access via domain
 * const samePkg = pantry.githubcomgofireflyio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gofireflyio"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gofireflyio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gofireflyioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gofireflyio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gofireflyio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/gofireflyio' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/gofireflyio' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/gofireflyio' as const,
}

export type GofireflyioPackage = typeof gofireflyioPackage
