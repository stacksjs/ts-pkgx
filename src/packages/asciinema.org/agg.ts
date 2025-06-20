/**
 * **agg** - Asciicast to GIF converter
 *
 * @domain `asciinema.org/agg`
 * @programs `agg`
 * @version `1.5.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install agg`
 * @name `agg`
 * @dependencies `rust-lang.org^1.56`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.agg
 * // Or access via domain
 * const samePkg = pantry.asciinemaorgagg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "agg"
 * console.log(pkg.description) // "Asciicast to GIF converter"
 * console.log(pkg.programs)    // ["agg"]
 * console.log(pkg.versions[0]) // "1.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/asciinema-org/agg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aggPackage = {
  /**
   * The display name of this package.
   */
  name: 'agg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'asciinema.org/agg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Asciicast to GIF converter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/asciinema.org/agg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install agg' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'agg',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.56',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.0',
    '1.4.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type AggPackage = typeof aggPackage
