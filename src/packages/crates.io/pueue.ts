/**
 * **pueue** - pkgx package
 *
 * @domain `crates.io/pueue`
 *
 * @install `launchpad install crates.io/pueue`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopueue
 * console.log(pkg.name)        // "pueue"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pueue.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopueuePackage = {
  /**
   * The display name of this package.
   */
  name: 'pueue' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pueue' as const,
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
  installCommand: 'launchpad install crates.io/pueue' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pueue -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pueue' as const,
}

export type CratesiopueuePackage = typeof cratesiopueuePackage
