/**
 * **lu-zero** - pkgx package
 *
 * @domain `github.com/lu-zero`
 *
 * @install `pkgx github.com/lu-zero`
 * @name `lu-zero`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.luzero
 * // Or access via domain
 * const samePkg = pantry.githubcomluzero
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lu-zero"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lu-zero.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luzeroPackage = {
  /**
   * The display name of this package.
   */
  name: 'lu-zero' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lu-zero' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/lu-zero' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/lu-zero' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/lu-zero' as const,
}

export type LuzeroPackage = typeof luzeroPackage
