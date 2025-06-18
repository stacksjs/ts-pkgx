/**
 * **github.com/astanin/python-tabulate** - pkgx package
 *
 * @domain `github.com/astanin/python/tabulate`
 *
 * @install `pkgx github.com/astanin/python-tabulate`
 * @aliases `github.com/astanin/python-tabulate`, `astanin/python-tabulate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomastaninpythontabulate
 * // Or access via domain
 * const samePkg = pantry.githubcomastaninpythontabulate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "astanin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/astanin/python/tabulate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomastaninpythontabulatePackage = {
  /**
   * The display name of this package.
   */
  name: 'astanin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/astanin/python/tabulate' as const,
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
  installCommand: 'pkgx github.com/astanin/python-tabulate' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/astanin/python-tabulate',
    'astanin/python-tabulate',
  ] as const,
  fullPath: 'github.com/astanin/python-tabulate' as const,
}

export type GithubcomastaninpythontabulatePackage = typeof githubcomastaninpythontabulatePackage
