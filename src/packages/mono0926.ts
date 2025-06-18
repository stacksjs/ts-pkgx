/**
 * **mono0926** - pkgx package
 *
 * @domain `github.com/mono0926`
 *
 * @install `pkgx github.com/mono0926`
 * @name `mono0926`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mono0926
 * // Or access via domain
 * const samePkg = pantry.githubcommono0926
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mono0926"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mono0926.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mono0926Package = {
  /**
   * The display name of this package.
   */
  name: 'mono0926' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mono0926' as const,
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
  installCommand: 'pkgx github.com/mono0926' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mono0926' as const,
}

export type Mono0926Package = typeof mono0926Package
