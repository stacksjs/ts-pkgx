/**
 * **peltoche** - pkgx package
 *
 * @domain `github.com/peltoche`
 *
 * @install `pkgx github.com/peltoche`
 * @name `peltoche`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.peltoche
 * // Or access via domain
 * const samePkg = pantry.githubcompeltoche
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "peltoche"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/peltoche.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const peltochePackage = {
  /**
   * The display name of this package.
   */
  name: 'peltoche' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/peltoche' as const,
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
  installCommand: 'pkgx github.com/peltoche' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/peltoche' as const,
}

export type PeltochePackage = typeof peltochePackage
