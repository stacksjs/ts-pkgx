/**
 * **Limeth** - pkgx package
 *
 * @domain `github.com/Limeth`
 *
 * @install `pkgx github.com/Limeth`
 * @name `Limeth`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Limeth
 * // Or access via domain
 * const samePkg = pantry.githubcomlimeth
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Limeth"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Limeth.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const limethPackage = {
  /**
   * The display name of this package.
   */
  name: 'Limeth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Limeth' as const,
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
  installCommand: 'pkgx github.com/Limeth' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Limeth' as const,
}

export type LimethPackage = typeof limethPackage
