/**
 * **iawia002** - pkgx package
 *
 * @domain `github.com/iawia002`
 *
 * @install `pkgx github.com/iawia002`
 * @name `iawia002`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.iawia002
 * // Or access via domain
 * const samePkg = pantry.githubcomiawia002
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "iawia002"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/iawia002.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const iawia002Package = {
  /**
   * The display name of this package.
   */
  name: 'iawia002' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/iawia002' as const,
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
  installCommand: 'pkgx github.com/iawia002' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/iawia002' as const,
}

export type Iawia002Package = typeof iawia002Package
