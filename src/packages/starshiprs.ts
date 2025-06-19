/**
 * **starship** - ☄🌌️  The minimal, blazing-fast, and infinitely customizable prompt for any shell!
 *
 * @domain `starship.rs`
 * @programs `starship`
 * @version `1.23.0` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install starship`
 * @aliases `starship`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.starship
 * // Or access via domain
 * const samePkg = pantry.starshiprs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "starship.rs"
 * console.log(pkg.description) // "☄🌌️  The minimal, blazing-fast, and infinitely..."
 * console.log(pkg.programs)    // ["starship"]
 * console.log(pkg.versions[0]) // "1.23.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/starship-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const starshipPackage = {
  /**
   * The display name of this package.
   */
  name: 'starship.rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'starship.rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: '☄🌌️  The minimal, blazing-fast, and infinitely customizable prompt for any shell!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/starship.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install starship' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'starship',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.23.0',
    '1.22.1',
    '1.22.0',
    '1.21.1',
    '1.21.0',
    '1.20.1',
    '1.20.0',
    '1.19.0',
    '1.18.2',
    '1.18.1',
    '1.18.0',
    '1.17.1',
    '1.17.0',
    '1.16.0',
    '1.15.0',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.1',
    '1.13.0',
    '1.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'starship',
  ] as const,
}

export type StarshipPackage = typeof starshipPackage
