/**
 * **albion_terminal_rpg** - Package from pantry: crates.io/albion_terminal_rpg
 *
 * @domain `crates.io/albion_terminal_rpg`
 *
 * @install `launchpad install crates.io/albion_terminal_rpg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioalbion_terminal_rpg
 * console.log(pkg.name)        // "albion_terminal_rpg"
 * console.log(pkg.description) // "Package from pantry: crates.io/albion_terminal_rpg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/albion_terminal_rpg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioalbion_terminal_rpgPackage = {
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
  description: 'Package from pantry: crates.io/albion_terminal_rpg' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/albion_terminal_rpg' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/albion_terminal_rpg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/albion_terminal_rpg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/albion_terminal_rpg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Cratesioalbion_terminal_rpgPackage = typeof cratesioalbion_terminal_rpgPackage
