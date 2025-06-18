/**
 * **jasper-software** - pkgx package
 *
 * @domain `github.com/jasper-software`
 *
 * @install `pkgx github.com/jasper-software`
 * @name `jasper-software`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jaspersoftware
 * // Or access via domain
 * const samePkg = pantry.githubcomjaspersoftware
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jasper-software"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jasper-software.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jaspersoftwarePackage = {
  /**
   * The display name of this package.
   */
  name: 'jasper-software' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jasper-software' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/jasper-software' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/jasper-software' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jasper-software' as const,
}

export type JaspersoftwarePackage = typeof jaspersoftwarePackage
