/**
 * **FredHucht** - pkgx package
 *
 * @domain `github.com/FredHucht`
 *
 * @install `pkgx github.com/FredHucht`
 * @name `FredHucht`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.FredHucht
 * // Or access via domain
 * const samePkg = pantry.githubcomfredhucht
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "FredHucht"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/FredHucht.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fredHuchtPackage = {
  /**
   * The display name of this package.
   */
  name: 'FredHucht' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/FredHucht' as const,
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
  installCommand: 'pkgx github.com/FredHucht' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/FredHucht' as const,
}

export type FredHuchtPackage = typeof fredHuchtPackage
