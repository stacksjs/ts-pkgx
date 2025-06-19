/**
 * **ctags** - A maintained ctags implementation
 *
 * @domain `ctags.io`
 * @programs `ctags`
 * @version `6.2.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ctags`
 * @aliases `ctags`
 * @dependencies `digip.org/jansson^2`, `pyyaml.org/libyaml^0.2`, `pcre.org/v2^10`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ctags
 * // Or access via domain
 * const samePkg = pantry.ctagsio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ctags.io"
 * console.log(pkg.description) // "A maintained ctags implementation"
 * console.log(pkg.programs)    // ["ctags"]
 * console.log(pkg.versions[0]) // "6.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ctags-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ctagsPackage = {
  /**
   * The display name of this package.
   */
  name: 'ctags.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ctags.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A maintained ctags implementation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ctags.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ctags' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ctags',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'digip.org/jansson^2',
    'pyyaml.org/libyaml^0.2',
    'pcre.org/v2^10',
    'gnome.org/libxml2~2.13 # 2.14 changes the API',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.2.0',
    '6.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ctags',
  ] as const,
}

export type CtagsPackage = typeof ctagsPackage
