/**
 * **github.com/tox-dev/filelock** - pkgx package
 *
 * @domain `github.com/tox/dev/filelock`
 *
 * @install `pkgx github.com/tox-dev/filelock`
 * @aliases `github.com/tox-dev/filelock`, `tox-dev/filelock`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomtoxdevfilelock
 * // Or access via domain
 * const samePkg = pantry.githubcomtoxdevfilelock
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tox-dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tox/dev/filelock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtoxdevfilelockPackage = {
  /**
   * The display name of this package.
   */
  name: 'tox-dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tox/dev/filelock' as const,
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
  installCommand: 'pkgx github.com/tox-dev/filelock' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/tox-dev/filelock',
    'tox-dev/filelock',
  ] as const,
  fullPath: 'github.com/tox-dev/filelock' as const,
}

export type GithubcomtoxdevfilelockPackage = typeof githubcomtoxdevfilelockPackage
