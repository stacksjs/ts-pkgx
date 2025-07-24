/**
 * **rucola-notes** - pkgx package
 *
 * @domain `crates.io/rucola-notes`
 *
 * @install `launchpad install crates.io/rucola-notes`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiorucolanotes
 * console.log(pkg.name)        // "rucola-notes"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rucola-notes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiorucolanotesPackage = {
  /**
   * The display name of this package.
   */
  name: 'rucola-notes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rucola-notes' as const,
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
  installCommand: 'launchpad install crates.io/rucola-notes' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/rucola-notes -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/rucola-notes' as const,
}

export type CratesiorucolanotesPackage = typeof cratesiorucolanotesPackage
