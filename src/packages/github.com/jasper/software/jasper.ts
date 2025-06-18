/**
 * **github.com/jasper-software/jasper** - pkgx package
 *
 * @domain `github.com/jasper/software/jasper`
 *
 * @install `pkgx github.com/jasper-software/jasper`
 * @aliases `github.com/jasper-software/jasper`, `jasper-software/jasper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomjaspersoftwarejasper
 * // Or access via domain
 * const samePkg = pantry.githubcomjaspersoftwarejasper
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jasper-software"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jasper/software/jasper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjaspersoftwarejasperPackage = {
  /**
   * The display name of this package.
   */
  name: 'jasper-software' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jasper/software/jasper' as const,
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
  installCommand: 'pkgx github.com/jasper-software/jasper' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/jasper-software/jasper',
    'jasper-software/jasper',
  ] as const,
  fullPath: 'github.com/jasper-software/jasper' as const,
}

export type GithubcomjaspersoftwarejasperPackage = typeof githubcomjaspersoftwarejasperPackage
