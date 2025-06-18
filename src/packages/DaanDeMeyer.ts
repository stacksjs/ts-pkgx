/**
 * **DaanDeMeyer** - pkgx package
 *
 * @domain `github.com/DaanDeMeyer`
 *
 * @install `pkgx github.com/DaanDeMeyer`
 * @name `DaanDeMeyer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.DaanDeMeyer
 * // Or access via domain
 * const samePkg = pantry.githubcomdaandemeyer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "DaanDeMeyer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DaanDeMeyer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daanDeMeyerPackage = {
  /**
   * The display name of this package.
   */
  name: 'DaanDeMeyer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DaanDeMeyer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/DaanDeMeyer' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/DaanDeMeyer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/DaanDeMeyer' as const,
}

export type DaanDeMeyerPackage = typeof daanDeMeyerPackage
