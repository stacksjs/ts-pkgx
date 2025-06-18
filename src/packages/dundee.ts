/**
 * **dundee** - pkgx package
 *
 * @domain `github.com/dundee`
 *
 * @install `pkgx github.com/dundee`
 * @name `dundee`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dundee
 * // Or access via domain
 * const samePkg = pantry.githubcomdundee
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dundee"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dundee.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dundeePackage = {
  /**
   * The display name of this package.
   */
  name: 'dundee' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dundee' as const,
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
  installCommand: 'pkgx github.com/dundee' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/dundee' as const,
}

export type DundeePackage = typeof dundeePackage
