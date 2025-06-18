/**
 * **ruby-install** - Install Ruby, JRuby, Rubinius, TruffleRuby, or mruby
 *
 * @domain `github.com/postmodern/ruby-install`
 * @programs `ruby-install`
 * @version `0.10.1` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ruby-install`
 * @name `ruby-install`
 * @dependencies `tukaani.org/xz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rubyinstall
 * // Or access via domain
 * const samePkg = pantry.githubcompostmodernrubyinstall
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ruby-install"
 * console.log(pkg.description) // "Install Ruby, JRuby, Rubinius, TruffleRuby, or ..."
 * console.log(pkg.programs)    // ["ruby-install"]
 * console.log(pkg.versions[0]) // "0.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/postmodern/ruby-install.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubyinstallPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruby-install' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/postmodern/ruby-install' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Install Ruby, JRuby, Rubinius, TruffleRuby, or mruby' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/postmodern/ruby-install/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ruby-install' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ruby-install',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'tukaani.org/xz',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.1',
    '0.10.0',
    '0.9.4',
    '0.9.3',
    '0.9.2',
    '0.9.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RubyinstallPackage = typeof rubyinstallPackage
