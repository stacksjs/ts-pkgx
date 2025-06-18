/**
 * **flex** - The Fast Lexical Analyzer - scanner generator for lexing in C and C++
 *
 * @domain `github.com/westes/flex`
 * @programs `flex`, `flex++`
 * @version `2.6.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/westes/flex -- $SHELL -i`
 * @name `flex`
 * @aliases `westes/flex`
 * @dependencies `gnu.org/gettext^0`, `gnu.org/m4^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.flex
 * // Or access via domain
 * const samePkg = pantry.githubcomwestesflex
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "flex"
 * console.log(pkg.description) // "The Fast Lexical Analyzer - scanner generator f..."
 * console.log(pkg.programs)    // ["flex", "flex++"]
 * console.log(pkg.versions[0]) // "2.6.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/westes/flex.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flexPackage = {
  /**
   * The display name of this package.
   */
  name: 'flex' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/westes/flex' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Fast Lexical Analyzer - scanner generator for lexing in C and C++' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/westes/flex/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/westes/flex -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'flex',
    'flex++',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0',
    'gnu.org/m4^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'westes/flex',
  ] as const,
  fullPath: 'github.com/westes/flex' as const,
}

export type FlexPackage = typeof flexPackage
