/**
 * **Cyfrin** - pkgx package
 *
 * @domain `github.com/Cyfrin`
 *
 * @install `pkgx github.com/Cyfrin`
 * @name `Cyfrin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Cyfrin
 * // Or access via domain
 * const samePkg = pantry.githubcomcyfrin
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Cyfrin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Cyfrin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cyfrinPackage = {
  /**
   * The display name of this package.
   */
  name: 'Cyfrin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Cyfrin' as const,
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
  installCommand: 'pkgx github.com/Cyfrin' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Cyfrin' as const,
}

export type CyfrinPackage = typeof cyfrinPackage
