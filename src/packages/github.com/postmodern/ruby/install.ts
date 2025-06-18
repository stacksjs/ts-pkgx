/**
 * **github.com/postmodern/ruby-install** - pkgx package
 *
 * @domain `github.com/postmodern/ruby/install`
 *
 * @install `pkgx github.com/postmodern/ruby-install`
 * @aliases `github.com/postmodern/ruby-install`, `postmodern/ruby-install`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcompostmodernrubyinstall
 * // Or access via domain
 * const samePkg = pantry.githubcompostmodernrubyinstall
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "postmodern"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/postmodern/ruby/install.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompostmodernrubyinstallPackage = {
  /**
   * The display name of this package.
   */
  name: 'postmodern' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/postmodern/ruby/install' as const,
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
  installCommand: 'pkgx github.com/postmodern/ruby-install' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/postmodern/ruby-install',
    'postmodern/ruby-install',
  ] as const,
  fullPath: 'github.com/postmodern/ruby-install' as const,
}

export type GithubcompostmodernrubyinstallPackage = typeof githubcompostmodernrubyinstallPackage
