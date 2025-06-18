/**
 * **github.com/mac-cain13** - pkgx package
 *
 * @domain `github.com/mac/cain13`
 *
 * @install `pkgx github.com/mac-cain13`
 * @name `mac-cain13`
 * @aliases `github.com/mac-cain13`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcommaccain13
 * // Or access via domain
 * const samePkg = pantry.githubcommaccain13
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mac-cain13"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mac/cain13.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommaccain13Package = {
  /**
   * The display name of this package.
   */
  name: 'mac-cain13' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mac/cain13' as const,
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
  installCommand: 'pkgx github.com/mac-cain13' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/mac-cain13',
  ] as const,
  fullPath: 'github.com/mac-cain13' as const,
}

export type Githubcommaccain13Package = typeof githubcommaccain13Package
