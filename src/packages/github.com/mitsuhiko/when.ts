/**
 * **when** - Timezones from the command line
 *
 * @domain `github.com/mitsuhiko/when`
 * @programs `when`
 * @version `0.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) when`
 * @name `when`
 * @aliases `mitsuhiko/when`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.when
 * // Or access via domain
 * const samePkg = pantry.githubcommitsuhikowhen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "when"
 * console.log(pkg.description) // "Timezones from the command line"
 * console.log(pkg.programs)    // ["when"]
 * console.log(pkg.versions[0]) // "0.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mitsuhiko/when.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const whenPackage = {
  /**
   * The display name of this package.
   */
  name: 'when' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mitsuhiko/when' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Timezones from the command line' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mitsuhiko/when/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) when' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'when',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mitsuhiko/when',
  ] as const,
  fullPath: 'github.com/mitsuhiko/when' as const,
}

export type WhenPackage = typeof whenPackage
