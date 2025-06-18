/**
 * **peripheryapp** - pkgx package
 *
 * @domain `github.com/peripheryapp`
 *
 * @install `pkgx github.com/peripheryapp`
 * @name `peripheryapp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.peripheryapp
 * // Or access via domain
 * const samePkg = pantry.githubcomperipheryapp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "peripheryapp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/peripheryapp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const peripheryappPackage = {
  /**
   * The display name of this package.
   */
  name: 'peripheryapp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/peripheryapp' as const,
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
  installCommand: 'pkgx github.com/peripheryapp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/peripheryapp' as const,
}

export type PeripheryappPackage = typeof peripheryappPackage
