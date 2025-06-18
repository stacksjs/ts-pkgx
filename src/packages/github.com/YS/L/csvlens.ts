/**
 * **github.com/YS-L/csvlens** - pkgx package
 *
 * @domain `github.com/YS/L/csvlens`
 *
 * @install `pkgx github.com/YS-L/csvlens`
 * @aliases `github.com/YS-L/csvlens`, `YS-L/csvlens`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomYSLcsvlens
 * // Or access via domain
 * const samePkg = pantry.githubcomyslcsvlens
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "YS-L"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/YS/L/csvlens.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomYSLcsvlensPackage = {
  /**
   * The display name of this package.
   */
  name: 'YS-L' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/YS/L/csvlens' as const,
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
  installCommand: 'pkgx github.com/YS-L/csvlens' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/YS-L/csvlens',
    'YS-L/csvlens',
  ] as const,
  fullPath: 'github.com/YS-L/csvlens' as const,
}

export type GithubcomYSLcsvlensPackage = typeof githubcomYSLcsvlensPackage
