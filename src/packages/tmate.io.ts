/**
 * **tmate** - Instant Terminal Sharing
 *
 * @domain `tmate.io`
 * @programs `tmate`
 * @version `2.4.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/tmate-io.md
 *
 * @install `sh <(curl https://pkgx.sh) tmate`
 * @aliases `tmate`
 * @dependencies `libevent.org^2.0`, `invisible-island.net/ncurses@6`, `msgpack.org@6`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tmate
 * // Or access via domain
 * const samePkg = pantry.tmateio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tmate"
 * console.log(pkg.description) // "Instant Terminal Sharing"
 * console.log(pkg.programs)    // ["tmate"]
 * console.log(pkg.versions[0]) // "2.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tmate-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tmatePackage = {
  /**
   * The display name of this package.
   */
  name: 'tmate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tmate.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Instant Terminal Sharing' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tmate.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tmate' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tmate',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libevent.org^2.0',
    'invisible-island.net/ncurses@6',
    'msgpack.org@6',
    'libssh.org@0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tmate',
  ] as const,
  fullPath: 'tmate.io' as const,
}

export type TmatePackage = typeof tmatePackage
