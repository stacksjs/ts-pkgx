/**
 * **pcre** - Perl compatible regular expressions library
 *
 * @domain `pcre.org`
 * @programs `pcre-config`, `pcregrep`, `pcretest`
 * @version `8.45.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +pcre.org -- $SHELL -i`
 * @aliases `pcre`
 * @dependencies `sourceware.org/bzip2@1`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pcre
 * // Or access via domain
 * const samePkg = pantry.pcreorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pcre.org"
 * console.log(pkg.description) // "Perl compatible regular expressions library"
 * console.log(pkg.programs)    // ["pcre-config", "pcregrep", ...]
 * console.log(pkg.versions[0]) // "8.45.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pcre-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcrePackage = {
  /**
   * The display name of this package.
   */
  name: 'pcre.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pcre.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Perl compatible regular expressions library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pcre.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +pcre.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pcre-config',
    'pcregrep',
    'pcretest',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2@1',
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.45.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pcre',
  ] as const,
}

export type PcrePackage = typeof pcrePackage
