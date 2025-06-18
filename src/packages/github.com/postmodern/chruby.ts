/**
 * **chruby-exec** - Changes the current Ruby
 *
 * @domain `github.com/postmodern/chruby`
 * @programs `chruby-exec`
 * @version `0.3.9` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install chruby-exec`
 * @aliases `chruby-exec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.chrubyexec
 * // Or access via domain
 * const samePkg = pantry.githubcompostmodernchruby
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chruby"
 * console.log(pkg.description) // "Changes the current Ruby"
 * console.log(pkg.programs)    // ["chruby-exec"]
 * console.log(pkg.versions[0]) // "0.3.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/postmodern/chruby.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chrubyexecPackage = {
  /**
   * The display name of this package.
   */
  name: 'chruby' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/postmodern/chruby' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Changes the current Ruby' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/postmodern/chruby/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install chruby-exec' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'chruby-exec',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'chruby-exec',
  ] as const,
}

export type ChrubyexecPackage = typeof chrubyexecPackage
