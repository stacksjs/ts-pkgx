/**
 * **pcre2** - Perl compatible regular expressions library with a new API
 *
 * @domain `pcre.org/v2`
 * @programs `pcre2-config`, `pcre2grep`, `pcre2test`
 * @version `10.46.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pcre2`
 * @name `pcre2`
 * @dependencies `sourceware.org/bzip2@1`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pcre2
 * // Or access via domain
 * const samePkg = pantry.pcreorgv2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pcre2"
 * console.log(pkg.description) // "Perl compatible regular expressions library wit..."
 * console.log(pkg.programs)    // ["pcre2-config", "pcre2grep", ...]
 * console.log(pkg.versions[0]) // "10.46.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pcre-org/v2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcre2Package = {
  /**
   * The display name of this package.
   */
  name: 'pcre2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pcre.org/v2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Perl compatible regular expressions library with a new API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pcre.org/v2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pcre2' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pcre2-config',
    'pcre2grep',
    'pcre2test',
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
    '10.46.0',
    '10.44.0',
    '10.43.0',
    '10.42.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pcre.org/v2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pcre2' as const,
}

export type Pcre2Package = typeof pcre2Package
