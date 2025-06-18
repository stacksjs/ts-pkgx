/**
 * **github.com/terrarium-tf** - pkgx package
 *
 * @domain `github.com/terrarium/tf`
 *
 * @install `pkgx github.com/terrarium-tf`
 * @name `terrarium-tf`
 * @aliases `github.com/terrarium-tf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomterrariumtf
 * // Or access via domain
 * const samePkg = pantry.githubcomterrariumtf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "terrarium-tf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/terrarium/tf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomterrariumtfPackage = {
  /**
   * The display name of this package.
   */
  name: 'terrarium-tf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/terrarium/tf' as const,
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
  installCommand: 'pkgx github.com/terrarium-tf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/terrarium-tf',
  ] as const,
  fullPath: 'github.com/terrarium-tf' as const,
}

export type GithubcomterrariumtfPackage = typeof githubcomterrariumtfPackage
