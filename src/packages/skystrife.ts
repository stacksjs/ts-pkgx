/**
 * **skystrife** - pkgx package
 *
 * @domain `github.com/skystrife`
 *
 * @install `pkgx github.com/skystrife`
 * @name `skystrife`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.skystrife
 * // Or access via domain
 * const samePkg = pantry.githubcomskystrife
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "skystrife"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/skystrife.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skystrifePackage = {
  /**
   * The display name of this package.
   */
  name: 'skystrife' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/skystrife' as const,
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
  installCommand: 'pkgx github.com/skystrife' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/skystrife' as const,
}

export type SkystrifePackage = typeof skystrifePackage
