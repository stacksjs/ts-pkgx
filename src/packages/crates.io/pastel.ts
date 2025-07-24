/**
 * **pastel** - pkgx package
 *
 * @domain `crates.io/pastel`
 *
 * @install `launchpad install crates.io/pastel`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopastel
 * console.log(pkg.name)        // "pastel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pastel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopastelPackage = {
  /**
   * The display name of this package.
   */
  name: 'pastel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pastel' as const,
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
  installCommand: 'launchpad install crates.io/pastel' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pastel -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pastel' as const,
}

export type CratesiopastelPackage = typeof cratesiopastelPackage
