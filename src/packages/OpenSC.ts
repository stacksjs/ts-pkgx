/**
 * **OpenSC** - pkgx package
 *
 * @domain `github.com/OpenSC`
 *
 * @install `pkgx github.com/OpenSC`
 * @name `OpenSC`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.OpenSC
 * // Or access via domain
 * const samePkg = pantry.githubcomopensc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "OpenSC"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/OpenSC.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openSCPackage = {
  /**
   * The display name of this package.
   */
  name: 'OpenSC' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/OpenSC' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/OpenSC' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/OpenSC' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/OpenSC' as const,
}

export type OpenSCPackage = typeof openSCPackage
