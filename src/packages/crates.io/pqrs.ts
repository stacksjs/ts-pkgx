/**
 * **pqrs** - pkgx package
 *
 * @domain `crates.io/pqrs`
 *
 * @install `launchpad install crates.io/pqrs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopqrs
 * console.log(pkg.name)        // "pqrs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pqrs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopqrsPackage = {
  /**
   * The display name of this package.
   */
  name: 'pqrs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pqrs' as const,
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
  installCommand: 'launchpad install crates.io/pqrs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pqrs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pqrs' as const,
}

export type CratesiopqrsPackage = typeof cratesiopqrsPackage
