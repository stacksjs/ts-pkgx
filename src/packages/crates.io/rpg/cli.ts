/**
 * **crates.io/rpg-cli** - pkgx package
 *
 * @domain `crates.io/rpg/cli`
 *
 * @install `pkgx crates.io/rpg-cli`
 * @name `rpg-cli`
 * @aliases `crates.io/rpg-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiorpgcli
 * // Or access via domain
 * const samePkg = pantry.cratesiorpgcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rpg-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rpg/cli.md
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
  domain: 'crates.io/rpg/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io/rpg-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/rpg-cli',
  ] as const,
  fullPath: 'crates.io/rpg-cli' as const,
}

export type CratesiorpgcliPackage = typeof cratesiorpgcliPackage
