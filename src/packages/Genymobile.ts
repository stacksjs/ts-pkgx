/**
 * **Genymobile** - pkgx package
 *
 * @domain `github.com/Genymobile`
 *
 * @install `pkgx github.com/Genymobile`
 * @name `Genymobile`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Genymobile
 * // Or access via domain
 * const samePkg = pantry.githubcomgenymobile
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Genymobile"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Genymobile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const genymobilePackage = {
  /**
   * The display name of this package.
   */
  name: 'Genymobile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Genymobile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/Genymobile' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Genymobile' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Genymobile' as const,
}

export type GenymobilePackage = typeof genymobilePackage
