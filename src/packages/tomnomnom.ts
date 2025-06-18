/**
 * **tomnomnom** - pkgx package
 *
 * @domain `github.com/tomnomnom`
 *
 * @install `pkgx github.com/tomnomnom`
 * @name `tomnomnom`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tomnomnom
 * // Or access via domain
 * const samePkg = pantry.githubcomtomnomnom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tomnomnom"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tomnomnom.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tomnomnomPackage = {
  /**
   * The display name of this package.
   */
  name: 'tomnomnom' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tomnomnom' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/tomnomnom' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/tomnomnom' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/tomnomnom' as const,
}

export type TomnomnomPackage = typeof tomnomnomPackage
