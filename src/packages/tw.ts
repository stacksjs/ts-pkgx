/**
 * **tw** - A lightweight TUI application to view and query tabular data files, such as CSV, TSV, and parquet.
 *
 * @domain `crates.io/tabiew`
 * @programs `tw`
 * @version `0.9.4` (21 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tabiew.md
 *
 * @install `sh <(curl https://pkgx.sh) tw`
 * @name `tw`
 * @aliases `tabiew`
 * @dependencies `linuxopenssl.org`, `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tw
 * // Or access via domain
 * const samePkg = pantry.cratesiotabiew
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tw"
 * console.log(pkg.description) // "A lightweight TUI application to view and query..."
 * console.log(pkg.programs)    // ["tw"]
 * console.log(pkg.versions[0]) // "0.9.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tabiew.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const twPackage = {
  /**
   * The display name of this package.
   */
  name: 'tw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tabiew' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A lightweight TUI application to view and query tabular data files, such as CSV, TSV, and parquet.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/tabiew/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tw' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tw',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxopenssl.org',
    'openssl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.4',
    '0.9.0',
    '0.8.5',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.1',
    '0.7.0',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.0',
    '0.4.3',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.5',
    '0.3.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tabiew',
  ] as const,
  fullPath: 'crates.io/tabiew' as const,
}

export type TwPackage = typeof twPackage
