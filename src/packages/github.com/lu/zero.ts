/**
 * **github.com/lu-zero** - pkgx package
 *
 * @domain `github.com/lu/zero`
 *
 * @install `pkgx github.com/lu-zero`
 * @name `lu-zero`
 * @aliases `github.com/lu-zero`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomluzero
 * // Or access via domain
 * const samePkg = pantry.githubcomluzero
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lu-zero"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lu/zero.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomluzeroPackage = {
  /**
   * The display name of this package.
   */
  name: 'lu-zero' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lu/zero' as const,
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
  installCommand: 'pkgx github.com/lu-zero' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/lu-zero',
  ] as const,
  fullPath: 'github.com/lu-zero' as const,
}

export type GithubcomluzeroPackage = typeof githubcomluzeroPackage
