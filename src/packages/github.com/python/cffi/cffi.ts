/**
 * **github.com/python-cffi/cffi** - pkgx package
 *
 * @domain `github.com/python/cffi/cffi`
 *
 * @install `pkgx github.com/python-cffi/cffi`
 * @aliases `github.com/python-cffi/cffi`, `python-cffi/cffi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcompythoncfficffi
 * // Or access via domain
 * const samePkg = pantry.githubcompythoncfficffi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "python-cffi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/python/cffi/cffi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompythoncfficffiPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-cffi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/python/cffi/cffi' as const,
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
  installCommand: 'pkgx github.com/python-cffi/cffi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/python-cffi/cffi',
    'python-cffi/cffi',
  ] as const,
  fullPath: 'github.com/python-cffi/cffi' as const,
}

export type GithubcompythoncfficffiPackage = typeof githubcompythoncfficffiPackage
