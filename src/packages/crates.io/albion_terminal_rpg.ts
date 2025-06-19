/**
 * **albionrpg** - A text-based RPG for the Terminal, written in Rust.
 *
 * @domain `crates.io/albion_terminal_rpg`
 * @programs `albionrpg`
 * @version `2024.5.7` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install albionrpg`
 * @aliases `albionrpg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.albionrpg
 * // Or access via domain
 * const samePkg = pantry.cratesioalbion_terminal_rpg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "albion_terminal_rpg"
 * console.log(pkg.description) // "A text-based RPG for the Terminal, written in R..."
 * console.log(pkg.programs)    // ["albionrpg"]
 * console.log(pkg.versions[0]) // "2024.5.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/albion_terminal_rpg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const albionrpgPackage = {
  /**
   * The display name of this package.
   */
  name: 'albion_terminal_rpg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/albion_terminal_rpg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A text-based RPG for the Terminal, written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/albion_terminal_rpg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install albionrpg' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'albionrpg',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2024.5.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'albionrpg',
  ] as const,
}

export type AlbionrpgPackage = typeof albionrpgPackage
