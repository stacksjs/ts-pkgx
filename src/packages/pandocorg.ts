/**
 * **pandoc** - Swiss-army knife of markup format conversion
 *
 * @domain `pandoc.org`
 * @programs `pandoc`
 * @version `3.7.0.2` (31 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pandoc`
 * @aliases `pandoc`
 * @dependencies `gnu.org/gmp@6`, `zlib.net@1`, `sourceware.org/libffi@3`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pandoc
 * // Or access via domain
 * const samePkg = pantry.pandocorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pandoc.org"
 * console.log(pkg.description) // "Swiss-army knife of markup format conversion"
 * console.log(pkg.programs)    // ["pandoc"]
 * console.log(pkg.versions[0]) // "3.7.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pandoc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pandocPackage = {
  /**
   * The display name of this package.
   */
  name: 'pandoc.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pandoc.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Swiss-army knife of markup format conversion' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pandoc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pandoc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gmp@6',
    'zlib.net@1',
    'sourceware.org/libffi@3',
    'haskell.org~9.4',
    'haskell.org/cabal~3.10 # 3.12 complains when using --installdir about relative library paths',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.7.0.2',
    '3.7.0.1',
    '3.7.0',
    '3.6.4',
    '3.6.3',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.0',
    '3.4.0',
    '3.3.0',
    '3.2.1',
    '3.2.0',
    '3.1.13',
    '3.1.9',
    '3.1.8',
    '3.1.7',
    '3.1.6.2',
    '3.1.6',
    '3.1.5',
    '3.1.4',
    '3.1.3',
    '3.1.2',
    '3.1.12.3',
    '3.1.12.2',
    '3.1.12.1',
    '3.1.12',
    '3.1.11.1',
    '3.1.11',
    '3.1.10',
    '2.19.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pandoc',
  ] as const,
}

export type PandocPackage = typeof pandocPackage
