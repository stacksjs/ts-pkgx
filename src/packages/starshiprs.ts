/**
 * **starship.rs** - Package from pantry: starship.rs
 *
 * @domain `starship.rs`
 *
 * @install `launchpad install starship.rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.starshiprs
 * console.log(pkg.name)        // "starship.rs"
 * console.log(pkg.description) // "Package from pantry: starship.rs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/starship-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const starshiprsPackage = {
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
  description: 'Package from pantry: starship.rs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install starship.rs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +starship.rs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install starship.rs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/starship.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type StarshiprsPackage = typeof starshiprsPackage
