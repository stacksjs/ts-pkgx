/**
 * **fselect** - Find files with SQL-like queries
 *
 * @domain `crates.io/fselect`
 * @programs `fselect`
 * @version `0.8.12` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fselect`
 * @name `fselect`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fselect
 * // Or access via domain
 * const samePkg = pantry.cratesiofselect
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fselect"
 * console.log(pkg.description) // "Find files with SQL-like queries"
 * console.log(pkg.programs)    // ["fselect"]
 * console.log(pkg.versions[0]) // "0.8.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fselect.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fselectPackage = {
  /**
   * The display name of this package.
   */
  name: 'fselect' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fselect' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Find files with SQL-like queries' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fselect/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install fselect' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fselect',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.12',
    '0.8.11',
    '0.8.10',
    '0.8.9',
    '0.8.8',
    '0.8.6',
    '0.8.5',
    '0.8.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type FselectPackage = typeof fselectPackage
