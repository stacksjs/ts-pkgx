/**
 * **github.com/tom-on-the-internet/cemetery-escape** - pkgx package
 *
 * @domain `github.com/tom/on-the-internet/cemetery-escape`
 *
 * @install `pkgx github.com/tom-on-the-internet/cemetery-escape`
 * @aliases `github.com/tom-on-the-internet/cemetery-escape`, `tom-on-the-internet/cemetery-escape`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomtomontheinternetcemeteryescape
 * // Or access via domain
 * const samePkg = pantry.githubcomtomontheinternetcemeteryescape
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tom-on-the-internet"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tom/on-the-internet/cemetery-escape.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtomontheinternetcemeteryescapePackage = {
  /**
   * The display name of this package.
   */
  name: 'tom-on-the-internet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tom/on-the-internet/cemetery-escape' as const,
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
  installCommand: 'pkgx github.com/tom-on-the-internet/cemetery-escape' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/tom-on-the-internet/cemetery-escape',
    'tom-on-the-internet/cemetery-escape',
  ] as const,
  fullPath: 'github.com/tom-on-the-internet/cemetery-escape' as const,
}

export type GithubcomtomontheinternetcemeteryescapePackage = typeof githubcomtomontheinternetcemeteryescapePackage
