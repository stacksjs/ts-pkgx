/**
 * **siiptuo** - pkgx package
 *
 * @domain `github.com/siiptuo`
 *
 * @install `pkgx github.com/siiptuo`
 * @name `siiptuo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.siiptuo
 * // Or access via domain
 * const samePkg = pantry.githubcomsiiptuo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "siiptuo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/siiptuo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const siiptuoPackage = {
  /**
   * The display name of this package.
   */
  name: 'siiptuo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/siiptuo' as const,
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
  installCommand: 'pkgx github.com/siiptuo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/siiptuo' as const,
}

export type SiiptuoPackage = typeof siiptuoPackage
