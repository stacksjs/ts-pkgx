/**
 * **rage** - pkgx package
 *
 * @domain `crates.io/rage`
 *
 * @install `launchpad install crates.io/rage`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiorage
 * console.log(pkg.name)        // "rage"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rage.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioragePackage = {
  /**
   * The display name of this package.
   */
  name: 'rage' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rage' as const,
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
  installCommand: 'launchpad install crates.io/rage' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/rage -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/rage' as const,
}

export type CratesioragePackage = typeof cratesioragePackage
