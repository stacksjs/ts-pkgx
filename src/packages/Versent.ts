/**
 * **Versent** - pkgx package
 *
 * @domain `github.com/Versent`
 *
 * @install `pkgx github.com/Versent`
 * @name `Versent`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Versent
 * // Or access via domain
 * const samePkg = pantry.githubcomversent
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Versent"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Versent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const versentPackage = {
  /**
   * The display name of this package.
   */
  name: 'Versent' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Versent' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/Versent' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Versent' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Versent' as const,
}

export type VersentPackage = typeof versentPackage
