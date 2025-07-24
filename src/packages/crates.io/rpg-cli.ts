/**
 * **rpg-cli** - pkgx package
 *
 * @domain `crates.io/rpg-cli`
 *
 * @install `launchpad install crates.io/rpg-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiorpgcli
 * console.log(pkg.name)        // "rpg-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rpg-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiorpgcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'rpg-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rpg-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/rpg-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/rpg-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/rpg-cli' as const,
}

export type CratesiorpgcliPackage = typeof cratesiorpgcliPackage
