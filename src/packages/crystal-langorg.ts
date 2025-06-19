/**
 * **crystal** - Fast and statically typed, compiled language with Ruby-like syntax
 *
 * @domain `crystal-lang.org`
 * @programs `crystal`
 * @version `1.16.3` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install crystal`
 * @aliases `crystal`
 * @dependencies `hboehm.info/gc^8`, `gnu.org/gmp^6`, `libevent.org^2`, ... (+7 more)
 * @companions `crystal-lang.org/shards`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.crystal
 * // Or access via domain
 * const samePkg = pantry.crystallangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "crystal-lang.org"
 * console.log(pkg.description) // "Fast and statically typed, compiled language wi..."
 * console.log(pkg.programs)    // ["crystal"]
 * console.log(pkg.versions[0]) // "1.16.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crystal-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const crystalPackage = {
  /**
   * The display name of this package.
   */
  name: 'crystal-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crystal-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast and statically typed, compiled language with Ruby-like syntax' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crystal-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crystal' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'crystal',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'crystal-lang.org/shards',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hboehm.info/gc^8',
    'gnu.org/gmp^6',
    'libevent.org^2',
    'pyyaml.org/libyaml^0',
    'llvm.org<17',
    'openssl.org^1.1',
    'pcre.org/v2^10',
    'freedesktop.org/pkg-config^0',
    'sourceware.org/libffi^3',
    'invisible-island.net/ncurses^6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.3',
    '1.16.2',
    '1.16.1',
    '1.16.0',
    '1.15.1',
    '1.15.0',
    '1.14.1',
    '1.14.0',
    '1.13.3',
    '1.13.2',
    '1.13.1',
    '1.13.0',
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.2',
    '1.11.1',
    '1.11.0',
    '1.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crystal',
  ] as const,
}

export type CrystalPackage = typeof crystalPackage
