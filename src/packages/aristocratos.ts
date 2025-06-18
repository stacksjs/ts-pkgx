/**
 * **aristocratos** - pkgx package
 *
 * @domain `github.com/aristocratos`
 *
 * @install `pkgx github.com/aristocratos`
 * @name `aristocratos`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.aristocratos
 * // Or access via domain
 * const samePkg = pantry.githubcomaristocratos
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aristocratos"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aristocratos.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aristocratosPackage = {
  /**
   * The display name of this package.
   */
  name: 'aristocratos' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aristocratos' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/aristocratos' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/aristocratos' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/aristocratos' as const,
}

export type AristocratosPackage = typeof aristocratosPackage
