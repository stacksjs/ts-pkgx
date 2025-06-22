/**
 * **spacetime** - Multiplayer at the speed of light
 *
 * @domain `spacetimedb.com`
 * @programs `spacetime`
 * @version `2023.12.8` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install spacetime`
 * @name `spacetime`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.spacetime
 * // Or access via domain
 * const samePkg = pantry.spacetimedbcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "spacetime"
 * console.log(pkg.description) // "Multiplayer at the speed of light"
 * console.log(pkg.programs)    // ["spacetime"]
 * console.log(pkg.versions[0]) // "2023.12.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/spacetimedb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spacetimePackage = {
  /**
   * The display name of this package.
   */
  name: 'spacetime' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'spacetimedb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Multiplayer at the speed of light' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/spacetimedb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install spacetime' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'spacetime',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.12.8',
    '2023.8.12',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) spacetime -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install spacetime' as const,
}

export type SpacetimePackage = typeof spacetimePackage
