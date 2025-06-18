/**
 * **rbenv.org/ruby-build** - pkgx package
 *
 * @domain `rbenv.org/ruby/build`
 *
 * @install `pkgx rbenv.org/ruby-build`
 * @name `ruby-build`
 * @aliases `rbenv.org/ruby-build`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.rbenvorgrubybuild
 * // Or access via domain
 * const samePkg = pantry.rbenvorgrubybuild
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ruby-build"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rbenv-org/ruby/build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rbenvorgrubybuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruby-build' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rbenv.org/ruby/build' as const,
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
  installCommand: 'pkgx rbenv.org/ruby-build' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'rbenv.org/ruby-build',
  ] as const,
  fullPath: 'rbenv.org/ruby-build' as const,
}

export type RbenvorgrubybuildPackage = typeof rbenvorgrubybuildPackage
