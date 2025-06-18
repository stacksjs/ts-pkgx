/**
 * **opencollab** - pkgx package
 *
 * @domain `github.com/opencollab`
 *
 * @install `pkgx github.com/opencollab`
 * @name `opencollab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.opencollab
 * // Or access via domain
 * const samePkg = pantry.githubcomopencollab
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "opencollab"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/opencollab.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opencollabPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencollab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/opencollab' as const,
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
  installCommand: 'pkgx github.com/opencollab' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/opencollab' as const,
}

export type OpencollabPackage = typeof opencollabPackage
