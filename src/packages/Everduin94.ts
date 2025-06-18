/**
 * **Everduin94** - pkgx package
 *
 * @domain `github.com/Everduin94`
 *
 * @install `pkgx github.com/Everduin94`
 * @name `Everduin94`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Everduin94
 * // Or access via domain
 * const samePkg = pantry.githubcomeverduin94
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Everduin94"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Everduin94.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const everduin94Package = {
  /**
   * The display name of this package.
   */
  name: 'Everduin94' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Everduin94' as const,
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
  installCommand: 'pkgx github.com/Everduin94' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Everduin94' as const,
}

export type Everduin94Package = typeof everduin94Package
