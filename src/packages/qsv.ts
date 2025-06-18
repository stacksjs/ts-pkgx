/**
 * **qsv** - Ultra-fast CSV data-wrangling toolkit
 *
 * @domain `crates.io/qsv`
 * @programs `qsv`
 * @version `5.0.3` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/qsv.md
 *
 * @install `sh <(curl https://pkgx.sh) qsv`
 * @name `qsv`
 * @dependencies `linuxwayland.freedesktop.org`, `wayland.freedesktop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.qsv
 * // Or access via domain
 * const samePkg = pantry.cratesioqsv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "qsv"
 * console.log(pkg.description) // "Ultra-fast CSV data-wrangling toolkit"
 * console.log(pkg.programs)    // ["qsv"]
 * console.log(pkg.versions[0]) // "5.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/qsv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qsvPackage = {
  /**
   * The display name of this package.
   */
  name: 'qsv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/qsv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Ultra-fast CSV data-wrangling toolkit' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/qsv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) qsv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'qsv',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxwayland.freedesktop.org',
    'wayland.freedesktop.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.3',
    '4.0.0',
    '3.3.0',
    '3.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/qsv' as const,
}

export type QsvPackage = typeof qsvPackage
